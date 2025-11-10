import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="py-8 bg-[#2C2C54] font-medium">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-1">
                <Link to="/" className="font-bold tracking-widest text-xl">
                    Cinema
                </Link>
                <address className="flex gap-6 text-sm not-italic">
                    <a href="tel:+7999999999">+7999999999</a>
                    <span>Moscow, Pupanovo</span>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
