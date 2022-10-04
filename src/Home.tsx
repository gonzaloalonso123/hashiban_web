import './styles/App.css';
import Header from './components/header/Header';
import ImageTop from './components/image_top/Image';
import Introduction from './components/introductory_text/Introduction';
import Video from './components/video/Video';
import DescriptionCarousel from './components/card_display/Description-carousel';
import { useState } from 'react';
import NavBar from './components/buy_tab/buy-tab';
import ImageBottom from './components/image_bot/Image_bottom';
import texts from './content/Texts';
import Basic_info from './components/basic_info_display/Basic_info';
import Footer from './components/footer/Footer';

function Home() {

	const [buyTab, setBuyTab] = useState(false);

	return (
		<div className='main'>
			<NavBar setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<Header setBuyTab = {setBuyTab} buyTab = {buyTab}/>
			<ImageTop/>
			<Introduction text={texts[0].description}/>
			<DescriptionCarousel />
			{/* <Video /> */}
			<ImageBottom />
			<Introduction text={texts[1].description}/>
			<Basic_info />
			<Footer />
		</div>
	);
}

export default Home;
