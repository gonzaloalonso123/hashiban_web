import React from 'react';
import './App.css';
import frame from './images/frame.png';

function Video() {
  return (
	<div className='video-section'>
		<div className='video'>
			<img src={frame} alt=''/>
		</div>
	</div>
  );
}

export default Video;