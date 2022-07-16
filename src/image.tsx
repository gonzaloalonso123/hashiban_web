import React, { useEffect, useState } from 'react';
import './App.css';
import BatImg from './images/bat.png';
import DemonImg from './images/demon.png';
import WallImg from './images/wall.png';
import TabernImg from './images/tabern.png';
import { transform } from 'typescript';


function Image() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <section>
        <img src={TabernImg} alt='' id ='tabern' style={{ opacity : 1 - offsetY / 1000}}/>
        <img src={DemonImg} alt='' id ='demon' style={{ transform : `translateX(${offsetY * 0.1}px)`}}/>
        <img src={WallImg} alt='' id ='wall' />
        <img src={BatImg} alt='' id ='bat' style={{ transform : `translateX(${-offsetY * 0.1}px)`}}/>
    </section>
  );
}

export default Image;