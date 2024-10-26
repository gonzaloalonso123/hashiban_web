import React, { useEffect, useRef, useState } from "react";
import "./ImageTop.css";
import BatImg from "../../images/bat.png";
import DemonImg from "../../images/demon.png";
import WallImg from "../../images/wall.webp";
import TabernImg from "../../images/tabern.webp";
import Lights from "../../images/lights4.png";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../providers/ScrollProvider";
import { motion } from "framer-motion";

interface imageTopProps {
  setLoaded: React.Dispatch<React.SetStateAction<any>>;
}
function ImageTop({ setLoaded }: imageTopProps) {
  const [parentHeight, setParentHeight] = useState(0);
  const scrollPosition = useScroll();
  const imageRef = useRef<HTMLImageElement>(null);

  const handleResize = () => {
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    handleResize();
    setLoaded(true);
  };

  return (
    <div id="image-top_flex">
      <div
        className="image-top_section"
        style={{
          height: parentHeight,
        }}
      >
        <img
          src={TabernImg}
          ref={imageRef}
          onLoad={handleImageLoad}
          alt=""
          id="tabern"
          style={{
            opacity: 1 - scrollPosition / 800,
            transform: `translateX(${scrollPosition * -0.1}px)`,
          }}
        />
        <img
          src={Lights}
          alt=""
          id="lights"
          style={{ transform: `translateX(${scrollPosition * -0.1}px)` }}
        />
        <img src={DemonImg} alt="" id="demon" />
        <img
          src={WallImg}
          alt=""
          id="wall"
          // style={{ transform: `translateX(${offsetY * -0.4}px)` }}
        />
        <img
          src={BatImg}
          alt=""
          id="bat"
          style={{
            transform: `translateX(${scrollPosition * -0.05}px) translateY(${
              scrollPosition * -0.1
            }px)`,
          }}
        />
        <HeroText />
      </div>
    </div>
  );
}

const HeroText = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-4/5 max-w-[800px] z-20 mt-48 opacity-100 ml-96 invisible xl:visible"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}	
    >
      <h1 className=" text-gray-200  font-hashiban text-6xl drop-shadow-hero">
        La subasta de Hashiban
      </h1>
      <p className="drop-shadow-hero text-gray-200 font-hashiban text-xl max-w-xl">
        El juego de cartas de subastas y trasgos
      </p>
    </motion.div>
  );
};

export default ImageTop;
