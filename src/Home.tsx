import DescriptionBox from './components/hashiban_lore/DescriptionBox';
import './styles/App.css';
import Header from './components/header/Header';
import Image from './components/image_top/Image';
import Introduction from './components/introductory_text/Introduction';
import Video from './components/video/Video';
import DescriptionCarousel from './components/card_display/Description-carousel';
import { useState } from 'react';
import NavBar from './components/buy_tab/buy-tab';

function Home() {

	const [buyTab, setBuyTab] = useState(false);

	return (
		<div className='main'>
			<NavBar setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<Header  setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<Image/>
			<Introduction />
			<DescriptionCarousel />
			<Video />
		</div>
	);
}

export default Home;
