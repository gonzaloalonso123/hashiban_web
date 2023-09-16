import "./card_display.css";
import cards from "../../content/IntroductionImages";
import arrowL from "../../images/izqda.png";
import arrowR from "../../images/dcha.png";
import descriptions from "../../content/descriptions";
import { useState } from "react";
import { motion } from "framer-motion";

const DescriptionCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const handleArrowClick = (action: any) => {
    switch (action) {
      case "-":
        if (currentCard === 0) {
          setCurrentCard(3);
        } else {
          setCurrentCard(currentCard - 1);
        }
        break;
      case "+":
        if (currentCard === 3) {
          setCurrentCard(0);
        } else {
          setCurrentCard(currentCard + 1);
        }
        break;
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="scroll">
        <h1 className="title">Tipos de carta</h1>
        <div className="description-carousel">
          <img
            src={arrowL}
            className="arrow left"
            onClick={() => handleArrowClick("-")}
          />
          <img className="card" src={cards[currentCard]} alt="" />
          <img
            src={arrowR}
            className="arrow right"
            onClick={() => handleArrowClick("+")}
          />
        </div>
        <div className="description-section">
          <p className="description">
            <h2 className="title">{descriptions[currentCard].name}</h2>
            {descriptions[currentCard].description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DescriptionCarousel;
