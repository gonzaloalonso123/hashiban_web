import "./CardDisplay.css";
import cards from "../../content/IntroductionImages";
import arrowL from "../../images/izqda.png";
import arrowR from "../../images/dcha.png";
import descriptions from "../../content/descriptions";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import box from "../../images/producto2.png";

const CardDisplay = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  const boxRef = useRef<HTMLImageElement>(null);

  const openBox = () => {
    if (boxRef?.current) {
      if (boxRef.current.className.includes("open-box")) {
        return;
      }
      boxRef.current.className += " open-box";
      boxRef.current.className = boxRef.current.className.replace(
        "cursor-pointer",
        ""
      );
    }
    setTimeout(() => {
      setOpened(true);
    }, 600);
  };

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
      <div className="scroll transition-all duration-100">
        {!opened ? (
          <div className="flex flex-col py-24 items-center justify-center">
            <h1 className="text-4xl text-center text-black font-hashiban">
              {t("game_content")}
            </h1>
            <p className="text-black text-xs mb-10">({t("click_to_see")})</p>
            <img
              src={box}
              ref={boxRef}
              className="cursor-pointer hover:scale-105 transform transition-all duration-300 w-1/3 brightness-95 hover:drop-shadow-xl hover:brightness-100"
              onClick={openBox}
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl text-center text-black font-hashiban mt-24 mb-8">
              {t("game_content")}
            </h1>
            <div className="description-carousel">
              <img
                src={arrowL}
                className="cursor-pointer h-16 my-auto"
                onClick={() => handleArrowClick("-")}
              />
              <motion.img
                key={currentCard}
                src={t(cards[currentCard])}
                initial={{ opacity: 0, x: 20 }}
                animate={{ x: 0, opacity: 1 }}
                className="rounded-xl w-1/3 shadow-md"
                exit={{ opacity: 0, scale: 0, x: -20 }}
              />
              <img
                src={arrowR}
                className="cursor-pointer h-16 my-auto"
                onClick={() => handleArrowClick("+")}
              />
              {/* <img src={t(cards[currentCard])} alt="" /> */}
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
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CardDisplay;
