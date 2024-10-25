import React, { useEffect, useRef, useState } from "react";
import "./ImageTop.css";
import BatImg from "../../images/bat.png";
import DemonImg from "../../images/demon.png";
import WallImg from "../../images/wall.webp";
import TabernImg from "../../images/tabern.webp";
import Lights from "../../images/lights4.png";
import { useTranslation } from "react-i18next";

interface imageTopProps {
  setLoaded: React.Dispatch<React.SetStateAction<any>>;
}
function ImageTop({ setLoaded }: imageTopProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [scrollVisible, setScrollVisible] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
      if (imageRef.current?.scrollLeft > 0) {
        setScrollVisible(false);
      } else {
        setScrollVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = () => {
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
      setLoaded(true);
    }
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
            opacity: 1 - offsetY / 800,
            transform: `translateX(${offsetY * -0.1}px)`,
          }}
        />
        <img
          src={Lights}
          alt=""
          id="lights"
          style={{ transform: `translateX(${offsetY * -0.1}px)` }}
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
            transform: `translateX(${offsetY * -0.05}px) translateY(${
              offsetY * -0.1
            }px)`,
          }}
        />
      </div>
      {/* <HeroText /> */}
    </div>
  );
}

const HeroText = () => {
  const { t } = useTranslation();
  return (
    <div className="w-4/5 max-w-[800px] z-20 mx-auto -translate-y-48">
      <h1
        className="drop-shadow-lg text-white text-center font-hashiban"
        style={{
          fontSize: "7em",
        }}
      >
        {t("hero_text")}
      </h1>
    </div>
  );
};

export default ImageTop;
