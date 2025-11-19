import { useSelector } from "react-redux";
import PostersList from "./PosterList";
import { Link } from "react-router";

const Popular = () => {
    const films = useSelector((state) => state.films);

    if (films.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    const popularFilms = films.entities.slice(0, 5);

    return (
        <section className="pb-8 min-h-screen" id="popular__films">
            <div className="max-w-7xl mx-auto px-1">
                <h2 className="mb-12 text-3xl font-bold">Popular films</h2>
                <PostersList posts={popularFilms} />
                <Link
                    to="/films"
                    className="block text-right hover:underline text-lg"
                >
                    All movies
                </Link>
            </div>
        </section>
    );
};

export default Popular;
