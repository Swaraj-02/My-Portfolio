import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const Skills = () => {
  const { portfolioData } = useSelector((state) => state.root);

  //-> Here i target the 0 index of object or Skills data like that-
  const filterSkills = portfolioData.Skills[0];

  const { description, skills } = filterSkills;
  // console.log(skills);

  return (
    <section className="skill-section ">
      <div className="container">
        <SectionTitle title="Skills" />
      </div>
      <div className="container">
        <h2>{description}</h2>
        <div className="skill-box">
          {skills.map((item, index) => (
            <div key={index} className="skill-item">
              <p className="skill-text">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
