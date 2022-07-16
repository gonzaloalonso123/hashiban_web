import React from 'react';
import DescriptionBox from './descriptionBox';
import { useState } from 'react';
import './App.css';
import Header from './header';
import Image from './image';

function Home() {
  return (
    <div className='main'>
      <Header />
      <Image />
      <DescriptionBox/>
    </div>
  );
}

export default Home;
