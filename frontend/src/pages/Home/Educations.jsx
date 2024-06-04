import SectionTitle from "../../components/SectionTitle";
import Cards from "../../components/Cards";
import { useSelector } from "react-redux";

const Educations = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { Educations } = portfolioData;

  return (
    <section className="education-section">
      <div className="container">
        <SectionTitle title="Educations" />
      </div>
      <Cards Items={Educations} />
    </section>
  );
};

export default Educations;
