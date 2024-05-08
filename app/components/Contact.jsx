import Image from "next/image";
import letter from "../assets/icon/letter_white.png";
import linkedin from "../assets/icon/linkedin.png";
import github from "../assets/icon/github.png";
import { lobster } from "../styles/fonts.js";
import gif_contact from "../assets/gif_contact.gif";

/**
 * This component renders the contact component.
 * @returns {jsx} <Contact />
 */
export default function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-section__title">
        <h2 className={lobster.className}>Contactez-moi !</h2>
      </div>
      <div className="contact-flex">
        <div className="contact-section__cnt">
          <div className="contact-section__item">
            <Image
              src={letter}
              alt="Icône mail"
              className="contact-section__icon"
            />
            <a href="mailto:ebrudincer.pro@gmail.com">
              ebrudincer.pro@gmail.com
            </a>
          </div>
          <div className="contact-section__item">
            <Image
              src={linkedin}
              alt="Icône Linked in"
              className="contact-section__icon"
            />
            <a href="https://linkedin.com/in/ebru-dincer6">
              linkedin.com/in/ebru-dincer6
            </a>
          </div>
          <div className="contact-section__item">
            <Image
              src={github}
              alt="Icône Github"
              className="contact-section__icon"
            />
            <a href="https://github.com/ebru-dincer">github.com/ebru-dincer</a>
          </div>
        </div>
        <Image
          src={gif_contact}
          className="contact-section__gif"
          alt="Gif design"
        />
      </div>
    </footer>
  );
}
