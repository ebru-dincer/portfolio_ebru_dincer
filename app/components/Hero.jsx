// import { Roboto } from "next/font/google";
import { Lobster } from "next/font/google";
import portrait from "../assets/portrait.jpg"
import Image from "next/image";

export const lobster = Lobster({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
  })

export default function Hero() {
    return (
        <div className="hero-section">
            <div>
            <h1 className={lobster.className}>Bienvenue !</h1>
            <p>Ce site est mon portfolio où j'y présente les projets que j'ai effectués durant ma formation Intégrateur web chez Openclassrooms.</p>
            <p>Après une période d'errance professionnelle où j'ai exploré divers domaines, j'ai découvert ma passion pour le développement web. Animé par le désir de créer et d'innover, j'ai décidé de me reconvertir dans le monde du web, où chaque ligne de code est une opportunité de construire quelque chose d'utile et de significatif. Cette transition m'a non seulement permis de trouver ma vocation, mais elle m'a également ouvert les portes d'un univers en constante évolution où la créativité et la technologie se rencontrent pour façonner l'avenir numérique.</p>
            </div>
            <div>
                <Image src={portrait} className="hero-section__portrait" />
            </div>
        </div>
    );
}