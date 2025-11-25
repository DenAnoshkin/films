import { useState } from "react";
import Pagination from "../components/Pagination";
import PostersList from "../components/PosterList";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import SearchInput from "../components/UI/SearchInput";

const CatalogPage = () => {
    const films = useSelector((state) => state.films);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState("");

    if (films.isLoading) {
        return <Loading />;
    }

    const pageSize = 9;
    const filteredFilms = films.entities.filter((film) =>
        film.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    const displayedFilms = filteredFilms.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (pageNumber, value = 0) => {
        setCurrentPage(pageNumber + value);
    };

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    return (
        <section className="py-8 min-h-screen">
            <div className="max-w-7xl mx-auto px-1">
                <h2 className="mb-12 text-3xl font-bold">Films catalog</h2>
                <SearchInput value={searchInput} onChange={handleSearchInput} />
                <PostersList posts={displayedFilms} />
                <Pagination
                    size={pageSize}
                    length={filteredFilms.length}
                    curPage={currentPage}
                    pageChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default CatalogPage;
