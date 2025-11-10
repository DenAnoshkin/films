import axios from "axios";

export const tmdbApiFilms = async () => {
    try {
        const response = await axios.get( import.meta.env.VITE_API_FILM, {
            headers: {
                Authorization: `Bearer ${ import.meta.env.VITE_API_KEY }`,
                accept: `application/json`,
            }
        } );
        return response.data;
    }
    catch ( error ) {
        return error;
    }
}

export const tmdbApiGenres = async () => {
    try {
        const response = await axios.get( import.meta.env.VITE_API_GENRES, {
            headers: {
                Authorization: `Bearer ${ import.meta.env.VITE_API_KEY }`,
                accept: `application/json`,
            }
        } );
        return response.data;
    }
    catch ( error ) {
        return error;
    }
}