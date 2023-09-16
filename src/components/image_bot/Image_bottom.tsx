import React, { useEffect, useRef, useState } from "react";
import "./image_bottom.css";
import Background from "../../images/image_bot_fondo.webp";
import Shine from "../../images/image_bot_shine.webp";
import Goblins from "../../images/image_bot_goblins.webp";

function ImageBottom() {
  const [offsetY, setOffsetY] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRefContainer = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleImageLoad = () => {
    if (imageRef.current != null && imageRefContainer.current != null) {
      setParentHeight(imageRef.current.height);
      imageRefContainer.current.scrollTo(300, 0);
    }
  };

  return (
    <div
      id="image-bot_flex"
      className="relative flex items-center"
      style={{ left: offsetY }}
    >
      <div
        className="image-bot_section"
        style={{
          height: parentHeight,
        }}
        ref={imageRefContainer}
      >
        <img
          src={Shine}
          id="shine"
          style={{ transform: `translateX(${offsetY * -0.1}px)` }}
        />
        <img
          src={Background}
          ref={imageRef}
          onLoad={handleImageLoad}
          alt=""
          id="background"
        />
        <img
          src={Goblins}
          alt=""
          id="goblins"
          style={{ transform: `translateX(${0.05 * -offsetY}px)` }}
        />
      </div>
    </div>
  );
}

export default ImageBottom;
