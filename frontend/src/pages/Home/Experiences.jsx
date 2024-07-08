import { useSelector } from "react-redux";
import Cards from "../../components/Cards";
import SectionTitle from "../../components/SectionTitle";

const Experiences = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { Experiences } = portfolioData;

  return (
    <section className="experience-section ">
      <div className="container">
        <SectionTitle title="Experiences" />
      </div>
      {Experiences && <Cards Items={Experiences} />}
    </section>
  );
};

export default Experiences;
