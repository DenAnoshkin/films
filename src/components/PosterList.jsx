import { Link } from "react-router";

const PostersList = ({ posts }) => {
    return (
        <ul className="flex flex-wrap justify-around gap-5 mb-10">
            {posts.map((post) => {
                return (
                    <li
                        key={post.id}
                        className="flex flex-col justify-between items-center gap-3 p-7 rounded-xl border-2 border-gray-600 h-auto"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${post.poster_path}`}
                            alt="фильм"
                            className="w-[300px] h-[450px] rounded"
                        />
                        <h3 className="max-w-xs text-center text-xl font-bold">
                            {post.title}
                        </h3>
                        <Link
                            to={`/films/${post.id}`}
                            className="text-center w-full px-2 py-4 bg-[#686DE0] rounded-xl"
                        >
                            Watch the movie
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default PostersList;
