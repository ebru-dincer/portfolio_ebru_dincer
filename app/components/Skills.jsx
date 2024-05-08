import Image from "next/image";
import { getData } from "../api/data";
import { lobster } from "../styles/fonts.js";

/**
 * This component renders the skills component.
 * @returns {jsx} <Skills />
 */
export default async function Skills() {
  const data = await getData();

  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__title">
        <h2 className={lobster.className}>Skills</h2>
      </div>
      <div className="skills-cntr">
        {data.skills.map(({ id, title, url }) => (
          <div className="skills-cntr__box" key={id}>
            <div className="skills-cntr__title">
              <div className="skills-cntr__logo">
                <Image src={url} width={50} height={50} alt="Logo des compétences" />
              </div>
              <h4>{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
