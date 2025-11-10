import { createSlice } from "@reduxjs/toolkit";
import { tmdbApiFilms } from "../../api/tmdb";

const initialStates = { entities: [], isLoading: true };
const filmSlice = createSlice( {
    name: "films",
    initialState: initialStates,
    reducers: {
        set( state, action ) {
            state.entities = action.payload;
            state.isLoading = false;
        },
    }
} );

export default filmSlice.reducer;
const { set } = filmSlice.actions;

export const getFilms = () => async ( dispatch, getState ) => {
    try {
        const films = await tmdbApiFilms();
        dispatch( set( films.results ) );
    } catch ( error ) {
        console.log( error )
    }
}