import logo from "../assets/logo_resize.png"
import Image from "next/image";
// import logo2 from "../assets/logo.jpg"

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            <Image src={logo} />
            </div>
            <div className="navbar__content">
            <a className="navbar__item" href="">About</a>
            <a className="navbar__item" href="">Projects</a>
            <a className="navbar__item" href="">Contact</a>
            </div>
        </nav>
    );
}