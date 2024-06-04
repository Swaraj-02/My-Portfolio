import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cards = ({ Items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  /* -- For Company/SubTitle/Technology  -- */

  const filteredSubTitle = () => {
    if (Items[selectedItemIndex].company) {
      return <h4>{Items[selectedItemIndex].company}</h4>;
    } else if (Items[selectedItemIndex].techstack) {
      return <p>{`[ ${Items[selectedItemIndex].techstack} ]`}</p>;
    } else {
      return <p>{Items[selectedItemIndex].subtitle}</p>;
    }
  };

  return (
    <div>
      <div className="card-box container">
        <div className="left-card-item">
          {Items.map((item, index) => (
            <motion.div
              className="card-period-box"
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3
                className={` card-period-text ${
                  selectedItemIndex === index ? "active" : "inActive"
                }`}
              >
                {item.period ? item.period : item.name}
              </h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="right-card-box"
            key={selectedItemIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="right-card-item">
              <div className="right-card-item-content">
                <h3 className="card-title-text">
                  {Items[selectedItemIndex].title}
                </h3>
                <div className="card-subtitle-text">{filteredSubTitle()}</div>
                <p className="card-desc-text">
                  {Items[selectedItemIndex].description}
                </p>
              </div>
              <div className="right-card-item-img">
                {Items[selectedItemIndex].image && (
                  <img src={Items[selectedItemIndex].image} alt="image" />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cards;
