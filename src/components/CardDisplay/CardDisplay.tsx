import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./CardDisplay.css";
import cards from "../../content/IntroductionImages";
import arrowL from "../../images/izqda.png";
import arrowR from "../../images/dcha.png";
import descriptions from "../../content/descriptions";
import box from "../../images/game_box.webp";

const CardDisplay = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const boxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = cards.map((card) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = t(card);
          img.onload = () => resolve();
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [t]);

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
          <div className="flex flex-col pb-24 pt-16 items-center justify-center">
            <h1 className="text-4xl text-center text-black font-hashiban">
              {t("game_content")}
            </h1>
            <p className="text-black text-xs mb-10">({t("click_to_see")})</p>
            <motion.img
              src={box}
              ref={boxRef}
              className="cursor-pointer transform transition-all duration-300 w-1/2 brightness-95 hover:drop-shadow-xl hover:brightness-100"
              onClick={openBox}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ) : (
          imagesLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl text-center text-black font-hashiban mt-16 mb-8">
                {t("game_content")}
              </h1>
              <div className="description-carousel">
                <motion.img
                  src={arrowL}
                  className="cursor-pointer h-10 xl:h-16 my-auto"
                  onClick={() => handleArrowClick("-")}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  key={currentCard}
                  src={t(cards[currentCard])}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="rounded-xl w-1/2 xl:w-1/3 shadow-md drop-shadow-2xl aspect-auto"
                  exit={{ opacity: 0, scale: 0, x: -20 }}
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={arrowR}
                  className="cursor-pointer h-10 xl:h-16 my-auto"
                  onClick={() => handleArrowClick("+")}
                />
              </div>
              <div className="pb-16 lg:pb-2">
                <p className="description">
                  <h2 className="w-full justify-center text-black my-6 flex items-center text-center">
                    <div className="rounded-md p-1 bg-[#956b00] shadow-md text-white border border-black font-black">
                      {descriptions[currentCard].number}
                    </div>
                    <span className="font-bold text-black">
                      {t(descriptions[currentCard].name)}
                    </span>
                  </h2>
                  {t(descriptions[currentCard].description)}
                </p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default CardDisplay;
