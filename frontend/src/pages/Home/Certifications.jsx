import SectionTitle from "../../components/SectionTitle";
import Cards from "../../components/Cards";
import { useSelector } from "react-redux";

const Certifications = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { Certificates } = portfolioData;

  return (
    <section className="certificate-section">
      <div className="container">
        <SectionTitle title="Certifications" />
      </div>
      <Cards Items={Certificates} />
    </section>
  );
};

export default Certifications;
