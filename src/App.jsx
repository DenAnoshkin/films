import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import "./index.css";
import MainPage from "./pages/MainPage";
import PosterPage from "./pages/PosterPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatalogPage from "./pages/CatalogPage";
import Error from "./components/Error";
import { getFilms } from "./redux/slices/filmSlice";
import { getGenres } from "./redux/slices/genresSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="font-[Manrope] text-white">
            <Header />
            <main className="bg-gradient-to-r from-[#2C2C54] to-[#686DE0] h-full w-full">
                <Routes>
                    <Route path="/error" element={<Error />} />
                    <Route path="/films/:filmId" element={<PosterPage />} />
                    <Route path="/films" element={<CatalogPage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Navigate to="/error" />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
