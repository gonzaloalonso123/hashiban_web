import React, { useEffect, useRef, useState } from 'react';
import './image_top.css';
import BatImg from '../../images/bat.png';
import DemonImg from '../../images/demon.png';
import WallImg from '../../images/wall.png';
import TabernImg from '../../images/tabern.png';
import Lights from '../../images/lights4.png';

function Image() {

  const [offsetY, setOffsetY] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    if(imageRef.current != null){
      setParentHeight(imageRef.current.height);
      console.log(imageRef.current.width);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = () => {
    if(imageRef.current != null){
      setParentHeight(imageRef.current.height);
    }
  }

  return (
      <section id = 'container' style={{ height : parentHeight}}>
          <img src={TabernImg} ref = {imageRef} onLoad={handleImageLoad} alt='' id ='tabern' style={{ opacity : 1 - offsetY / 800}}/>
          <img src={Lights} alt='' id ='lights'/>
          <img src={DemonImg} alt='' id ='demon' style={{ transform : `translateX(${offsetY * 0.1}px)`}}/>
          <img src={WallImg} alt='' id ='wall' />
          <img src={BatImg} alt='' id ='bat' style={{ transform : `translateX(${-offsetY * 0.1}px)`}}/>
      </section>
  );
}

export default Image;
