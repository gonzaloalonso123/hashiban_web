import "./CardDisplay.css";
import cards from "../../content/IntroductionImages";
import arrowL from "../../images/izqda.png";
import arrowR from "../../images/dcha.png";
import descriptions from "../../content/descriptions";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CardDisplay = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const { t } = useTranslation();
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
    >
      <div className="scroll">
        <h1 className="text-4xl text-center text-black font-hashiban mt-24 mb-8">
          {t("game_content")}
        </h1>
        <div className="description-carousel">
          <img
            src={arrowL}
            className="cursor-pointer h-16 my-auto"
            onClick={() => handleArrowClick("-")}
          />
          <img
            className="rounded-xl w-1/3 shadow-md"
            src={t(cards[currentCard])}
            alt=""
          />
          <img
            src={arrowR}
            className="cursor-pointer h-16 my-auto"
            onClick={() => handleArrowClick("+")}
          />
        </div>
        <div className="pb-16 lg:pb-2">
          <p className="description">
            <h2 className="w-full justify-center text-black my-6 flex items-center text-center gap-4">
              <div className="rounded-md p-1 bg-[#956b00] shadow-md text-white border border-black font-black">
                {descriptions[currentCard].number}
              </div>
              {t(descriptions[currentCard].name)}
            </h2>
            {t(descriptions[currentCard].description)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardDisplay;
