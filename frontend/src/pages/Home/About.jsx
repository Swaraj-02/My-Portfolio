import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
// import { imageUrl } from "../../../public/mypic.jpeg";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { About } = portfolioData;

  const {
    // imageUrl,
    description1,
    description2,
  } = About;

  return (
    <section className="about-section ">
      <div className="container">
        <SectionTitle title="About " />
      </div>
      <div className="about-content container">
        <div className="about-img">
          <img src={"./swaraj-pic.png"} alt="about_image" />
        </div>
        <div className="about-text-box">
          <p className="paragraph-1">{description1}</p>
          <p className="paragraph-2">{description2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
