import Image from "next/image";
import { skillsData } from "../data";
import { getData } from "../api/data";
import { lobster } from "../styles/fonts.js";


export default async function Projects() {
  const data = await getData();

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__title">
        <h2 className={lobster.className}>Projects</h2>
      </div>
      <ul id="cards">
        {data.projects.map(({ id, title, description, link, cover }) => (
          <li className="card" id={"card_" + id} key={id}>
            <div className="card__content">
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>
                  <a href={link} className="btn btn--accent">
                    Lien Github
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src={cover}
                  alt="Capture d'écran de projet"
                  width="500"
                  height="500"
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mobile-cards">
        {data.projects.map(({ id, title, description, link, cover }) => (
          <li className="mobile-cards__card" key={id}>
            <div className="mobile-cards__card--content">
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                  <a href={link} className="btn btn--accent">
                    Lien Github
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src={cover}
                  alt="Capture d'écran de projet"
                  width="500"
                  height="500"
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
