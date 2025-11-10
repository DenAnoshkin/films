import filmReducer from "./slices/filmSlice";
import genresReducer from "./slices/genresSlice";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "./middleware/thunk";

const store = configureStore( {
    reducer: {
        films: filmReducer,
        genres: genresReducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( thunk ),
    devTools: process.env.NODE_ENV !== "production",
} );

export default store;
