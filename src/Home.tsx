import React from 'react';
import DescriptionBox from './descriptionBox';
import { useState } from 'react';
import './App.css';
import Header from './header';
import Image from './image';
import Slider from './slider';
import Introduction from './introduction';
import Video from './video';

function Home() {
  return (
    <div className='main'>
      <Header />
      <Image />
      <Introduction/>
	  <Video/>
      <Slider/>
	  <DescriptionBox/>
    </div>
  );
}

export default Home;
