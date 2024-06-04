import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "./About";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div className="bg-primary">
      <Header />
      {portfolioData && (
        <div className="bg-primary">
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <Projects />
          <Educations />
          <Certifications />
          <Contact />
          <Footer />
          <Social />
        </div>
      )}
    </div>
  );
};

export default Home;
