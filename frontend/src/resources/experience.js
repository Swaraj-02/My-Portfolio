const experience = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    period: "Jan 2020 - Present",
    description:
      "Responsible for developing and maintaining web applications using modern technologies.",
  },
  {
    title: "Marketing Specialist",
    company: "Marketing Solutions Ltd.",
    period: "Mar 2018 - Dec 2019",
    description:
      "Executed marketing campaigns, analyzed market trends, and developed strategies to increase brand visibility.",
  },
  {
    title: "Financial Analyst",
    company: "Finance Experts Inc.",
    period: "Jun 2016 - Feb 2018",
    description:
      "Conducted financial analysis, prepared reports, and provided insights to optimize financial performance.Conducted financial analysis, prepared reports, and provided insights to optimize financial performance. ",
  },
];

export default experience;

/* 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import experiences from "../../resources/experience";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <section className="experience-section ">
      <div className="title-container">
        <SectionTitle title="Experiences" />
      </div>
      <div className="exp-box container">
        <div className="left-exp-item">
          {experiences.map((item, index) => (
            <div
              className="exp-period-box"
              key={index}
              onClick={() => setSelectedItemIndex(index)}
            >
              <h3
                className={` exp-period-text ${
                  selectedItemIndex === index ? "active" : "inActive"
                }`}
              >
                {item.period}
              </h3>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="right-exp-item"
            key={selectedItemIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="exp-title-text">
              {experiences[selectedItemIndex].title}
            </h3>
            <h4 className="exp-company-text">
              {experiences[selectedItemIndex].company}
            </h4>
            <p className="exp-desc-text">
              {experiences[selectedItemIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experiences;
*/
