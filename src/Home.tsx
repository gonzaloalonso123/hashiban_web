import DescriptionBox from './components/descriptionBox';
import './styles/App.css';
import Header from './components/header';
import Image from './components/image';
import Slider from './components/slider';
import Introduction from './components/introduction';
import Video from './components/video';
import DescriptionCarousel from './components/description-carousel';
import JugarButton from './components/jugarButton';
import { useState } from 'react';

function Home() {

	const [currentDescription, setCurrentDescription] = useState(-1)

	return (
		<div className='main'>
			<Header />
			<Image />
			<Introduction />
			<DescriptionCarousel setCurrentDescription={setCurrentDescription} currentDescription={currentDescription}/>
			<Video />
			{/* <Slider /> */}
			<JugarButton />
			<DescriptionBox />
		</div>
	);
}

export default Home;
