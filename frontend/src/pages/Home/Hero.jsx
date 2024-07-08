import Button from "../../components/Button";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";

const Hero = () => {
  //-> extract portfolioData using [useSelecter] from root (redux)
  const { portfolioData } = useSelector((state) => state.root);

  //-> extract Hero data from portfolioData [this is the json response from api]
  const { Hero } = portfolioData;

  //-> extract all the properties of Hero json data
  const { welcomeText, firstName, lastName, caption, description } = Hero;

  const filterCaption = caption.map((item) => item.name);

  //need to work on apis and frontend design and download cv button

  const handelDownloadCv = () => {
    const googleDriveLink =
      "https://drive.google.com/file/d/1ZVHnfLiN4bdoyRIKHslgG0NR3hdKtnhE/view?usp=sharing";

    window.location.href = googleDriveLink;
  };

  return (
    <section className="hero-section">
      <div className="container hero-box">
        <p className="hero-text">{welcomeText || ""}</p>
        <h1 className="hero-heading color-primary">
          {firstName || ""} {lastName || ""}
        </h1>
        <h2 className="hero-heading-h2">
          I am a{" "}
          <span className="color-secondary">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 180,
                strings: filterCaption || "Software Developer",
              }}
            />
          </span>
        </h2>
        <p className="hero-para">{description || ""}</p>
        <Button
          title="Download Resume"
          styleClass="button primary-btn"
          onClick={handelDownloadCv}
        />
      </div>
    </section>
  );
};

export default Hero;
