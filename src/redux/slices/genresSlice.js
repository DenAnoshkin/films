import { createSlice } from "@reduxjs/toolkit";
import { tmdbApiGenres } from "../../api/tmdb";

const initialStates = { entities: [], isLoading: true };
const genresSlice = createSlice( {
    name: "genres",
    initialState: initialStates,
    reducers: {
        set( state, action ) {
            state.entities = action.payload;
            state.isLoading = false;
        },
    }
} );

export default genresSlice.reducer;
const { set } = genresSlice.actions;

export const getGenres = () => async ( dispatch, getState ) => {
    try {
        const genres = await tmdbApiGenres();
        dispatch( set( genres.genres ) );
    } catch ( error ) {
        console.log( error )
    }
}