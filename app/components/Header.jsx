import logo from "../assets/logo_resize.webp";
import Image from "next/image";


/**
 * This component renders the header component.
 * @returns {jsx} <Header />
 */
export default function Header() {
  return (
    <nav className="navbar">
      <div>
        <a href="portfolio-ebru-dincer.vercel.app">
          <Image src={logo} className="navbar__logo" alt="Logo du portfolio" />
        </a>
      </div>
      <div className="navbar__content">
        <a className="navbar__item" href="#hero">
          ABOUT
        </a>
        <a className="navbar__item" href="#projects">
          PROJECTS
        </a>
        <a className="navbar__item" href="#skills">
          SKILLS
        </a>
        <a className="navbar__item" href="#contact">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
