import Image from "next/image";
// import { skillsData } from "../data";
import { getData } from "../api/data";
import { lobster } from "../styles/fonts.js";


export default async function Skills() {

  const data = await getData();

  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__title">
        <h2 className={lobster.className}>Skills</h2>
      </div>
      <div className="skills-cntr" >
        {data.skills.map(({ id, title, url, description }) => (
        
          <div className="skills-cntr__box" key={id}>
            <div className="skills-cntr__title">
              <div className="skills-cntr__logo">
                <Image src={url} width={50} height={50} alt="Logo des skills" />
              </div>
              <h4>{title}</h4>
            </div>
            {/* <p>{description}</p> */}
          </div>    
        ))}
      </div>
    </section>
  );
}
