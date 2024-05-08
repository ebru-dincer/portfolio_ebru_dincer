import portrait from "../assets/portrait.webp";
import Image from "next/image";
import { lobster } from "../styles/fonts.js";

/**
 * This component renders the hero component.
 * @returns {jsx} <Hero />
 */
export default function Hero() {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-section__txt">
        <h1 className={lobster.className}>Bienvenue !</h1>
        <p>
          Je suis Ebru Dinçer, développeuse web React basée à Strasbourg. Ce
          site est mon portfolio où j'y présente les projets que j'ai effectués
          durant ma formation Intégrateur web chez Openclassrooms.
        </p>
        <p>
          Après une période d'errance professionnelle où j'ai exploré divers
          domaines, j'ai découvert ma passion pour le développement web. Animée
          par le désir de créer et d'innover, j'ai décidé de me reconvertir dans
          le monde du web. Cette transition m'a non seulement permis de trouver
          ma vocation, mais elle m'a également ouvert les portes d'un univers en
          constante évolution.
        </p>
        <p>
          Guidée par une quête permanente d'amélioration, je m'engage à présent
          à poursuivre mon parcours en intégrant leur programme de formation
          "Développeur d'application JavaScript React" (niveau bac +3/4) en
          alternance.
        </p>
      </div>
      <div className="hero-section__image">
        <Image
          src={portrait}
          className="hero-section__portrait"
          alt="Portrait du portfolio"
        />
      </div>
    </div>
  );
}
