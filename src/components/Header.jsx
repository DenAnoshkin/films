import { Link } from "react-router";
import signInImg from "../assets/img/sign-in.svg";

const Header = () => {
    return (
        <header className="py-8 bg-[#2C2C54] font-medium text-xl">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-1">
                <Link to="/" className="font-bold tracking-widest">
                    Cinema
                </Link>
                <nav>
                    <ul className="flex gap-16">
                        <li>About us</li>
                        <li>
                            <Link to="/films">Films catalog</Link>
                        </li>
                    </ul>
                </nav>
                <a className="w-5 h-5" href="#">
                    <img src={signInImg} alt="Войти" />
                </a>
            </div>
        </header>
    );
};

export default Header;
