import React, { useEffect, useRef, useState } from "react";
import "./image_top.css";
import HorizontalScroll from "react-scroll-horizontal";
import BatImg from "../../images/bat.png";
import DemonImg from "../../images/demon.png";
import WallImg from "../../images/wall.png";
import TabernImg from "../../images/tabern.png";
import Lights from "../../images/lights4.png";

function ImageTop() {
  const [offsetY, setOffsetY] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [scrollLightInvisible, setScrollLightInvisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    if (imageRef.current != null && containerRef.current != null) {
      console.log(imageRef.current.getBoundingClientRect().x);
      if(imageRef.current.getBoundingClientRect().x < -400 && !scrollLightInvisible){
        setScrollLightInvisible(true);
      }
      setParentHeight(imageRef.current.height);
    }
  };

  useEffect(() => {
    const element = document.getElementById("tabern");
    // if (element != null) {
    //   element!.addEventListener(
    //     "animationend",
    //     () => {
    //       // Set your final state here. For example:
    //       element.style["left"] = '-20%';
    //     },
    //     { once: true }
    //   );
    // }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = () => {
    if (imageRef.current != null) {
      setParentHeight(imageRef.current.height);
    }
  };
  
  return (
    <div id = 'image-top_flex' className="relative flex items-center" ref = {containerRef} style = {{left: offsetY}}>
      <div className="top-scroll_shine" style={{transition : '2s', display: scrollLightInvisible? 'none' : 'all'}}></div>
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
          style={{ opacity: 1 - offsetY / 800, transform: `translateX(${-100 -offsetY * 0.3}px)`}}
        />
        <img src={Lights} alt="" id="lights" style={{transform: `translateX(${-100 -offsetY * 0.3}px)`}}/>
        <img
          src={DemonImg}
          alt=""
          id="demon"
          style={{transform: `translateX(${offsetY * -0.3}px)`}}
        />
        <img src={WallImg} alt="" id="wall" style={{transform: `translateX(${offsetY * 0.3}px)`}}/>
        <img
          src={BatImg}
          alt=""
          id="bat"
          style={{transform: `translateX(${offsetY * -1}px) translateY(${offsetY * -0.3}px)`}}
        />
      </div>
    </div>
  );
}

export default ImageTop;
