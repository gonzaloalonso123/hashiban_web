import "./card_display.css";
import cards from "../../content/IntroductionImages";
import arrowL from "../../images/izqda.png";
import arrowR from "../../images/dcha.png";
import descriptions from "../../content/Descriptions";
import { useState } from "react";

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
    <div className="container">
      <div className="scroll">
        <h1 className="title">Cartas de Hashiban</h1>
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
    </div>
  );
};

export default DescriptionCarousel;
