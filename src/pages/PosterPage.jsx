import { useSelector } from "react-redux";
import { useParams } from "react-router";

const PosterPage = () => {
    const filmId = useParams().filmId;
    const data = useSelector( ( state ) => state );
    const films = data.films;
    const genres = data.genres;
    const curFilm = films.entities.find( ( film ) => film.id.toString() === filmId );
    const curFilmGenres = genres.entities.filter( ( genre ) =>
        curFilm.genre_ids.includes( genre.id )
    );

    return (
        <article className="flex justify-between max-w-7xl mx-auto px-1 py-8 min-h-screen">
            <img
                src={`https://image.tmdb.org/t/p/original${ curFilm.poster_path }`}
                alt="poster of film"
                className="w-[500px] h-[700px]"
            />
            <div className="max-w-xl">
                <h1 className="mb-3 text-5xl font-bold">{curFilm.title}</h1>
                <p className="mb-16 text-2xl text-gray-300">
                    Original title - {curFilm.original_title}
                </p>
                <p className="mb-1 text-4xl font-bold">Film description</p>
                <p className="mb-16 text-xl text-gray-300">{curFilm.overview}</p>
                <table className="table-auto border-separate border-spacing-2 font-medium text-xl">
                    <tbody>
                        <tr>
                            <td>Release date:</td>
                            <td>{curFilm.release_date}</td>
                        </tr>
                        <tr>
                            <td>Genres:</td>
                            <td>
                                {curFilmGenres.map( ( genre ) => {
                                    return <p key={genre.id}>{genre.name} </p>;
                                } )}
                            </td>
                        </tr>
                        <tr>
                            <td>Popularity:</td>
                            <td>{curFilm.popularity}</td>
                        </tr>
                        <tr>
                            <td>Vote average:</td>
                            <td>{curFilm.vote_average}</td>
                        </tr>
                        <tr>
                            <td>Vote count:</td>
                            <td>{curFilm.vote_count}</td>
                        </tr>
                        <tr>
                            <td>Original language:</td>
                            <td>{curFilm.original_language.toUpperCase()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default PosterPage;
