import DescriptionBox from './components/hashiban_lore/descriptionBox';
import './styles/App.css';
import Header from './components/header/header';
import Image from './components/image_top/image';
import Introduction from './components/introductory_text/introduction';
import Video from './components/video/video';
import DescriptionCarousel from './components/card_display/description-carousel';
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
			<DescriptionBox />
		</div>
	);
}

export default Home;
