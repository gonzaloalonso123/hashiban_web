import './styles/App.css';
import Header from './components/header/Header';
import ImageTop from './components/image_top/Image';
import Introduction from './components/introductory_text/Introduction';
import Video from './components/video/Video';
import DescriptionCarousel from './components/card_display/Description-carousel';
import { useState } from 'react';
import NavBar from './components/buy_tab/buy-tab';
import ImageBottom from './components/image_bot/Image_bottom';

function Home() {

	const [buyTab, setBuyTab] = useState(false);

	return (
		<div className='main'>
			<NavBar setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<Header setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<ImageTop/>
			<Introduction />
			<DescriptionCarousel />
			{/* <Video /> */}
			<ImageBottom />
		</div>
	);
}

export default Home;
