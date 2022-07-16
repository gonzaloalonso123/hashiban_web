import React from 'react';
import DescriptionBox from './descriptionBox';
import { useState } from 'react';
import './App.css';
import Header from './header';
import Image from './image';
import Slider from './slider';

function Home() {
  return (
    <div className='main'>
      <Header />
      <Image />
      <DescriptionBox/>
      <Slider/>
    </div>
  );
}

export default Home;
