import logo from "../assets/logo_resize.png"
import Image from "next/image";
// import logo2 from "../assets/logo.jpg"

export default function Header() {
    return (
        <nav className="navbar">
            <div>
            <Image src={logo} className="navbar__logo"/>
            </div>
            <div className="navbar__content">
            <a className="navbar__item" href="">ABOUT</a>
            <a className="navbar__item" href="">SKILLS</a>
            <a className="navbar__item" href="">PROJECTS</a>
            <a className="navbar__item" href="">CONTACT</a>
            </div>
        </nav>
    );
}