import Image from "next/image";
import { skillsData } from "../data";
// import image1 from "../assets/portfolio_sophie.png"
import { getData } from "../api/data";

export default async function Projects() {
  const data = await getData();

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__title">
        <h2>PROJECTS</h2>
      </div>
      <ul id="cards">
        {data.projects.map(({ id, title, description, link, cover }) => (
          <li class="card" id={"card_" + id} key={id}>
            <div class="card__content">
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>
                  <a href={link} class="btn btn--accent">
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
		    {/* <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h4>Test 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="" class="btn btn--accent">
                    Lien Github
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src=""
                  alt="Capture d'écran de projet"
                  width="500"
                  height="500"
                />
              </figure>
            </div>
          </li>
		  <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h4>Test 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="" class="btn btn--accent">
                    Lien Github
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src=""
                  alt="Capture d'écran de projet"
                  width="500"
                  height="500"
                />
              </figure>
            </div>
          </li>
		  <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h4>Test 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a href="" class="btn btn--accent">
                    Lien Github
                  </a>
                </p>
              </div>
              <figure>
                <Image
                  src=""
                  alt="Capture d'écran de projet"
                  width="500"
                  height="500"
                />
              </figure>
            </div>
          </li> */}
      </ul>
    </section>
  );
}
