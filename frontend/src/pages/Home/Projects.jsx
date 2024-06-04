import { useSelector } from "react-redux";
import Cards from "../../components/Cards";
import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { Projects } = portfolioData;

  return (
    <section className="project-section ">
      <div className="container">
        <SectionTitle title="Projects" />
      </div>
      <Cards Items={Projects} />
    </section>
  );
};

export default Projects;
