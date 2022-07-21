import DescriptionBox from './components/descriptionBox';
import './styles/App.css';
import Header from './components/header';
import Image from './components/image';
import Slider from './components/slider';
import Introduction from './components/introduction';
import Video from './components/video';
import DescriptionCarousel from './components/description-carousel';
import JugarButton from './components/jugarButton';

function Home() {
  return (
    <div className='main'>
      <Header />
      <Image />
      <Introduction />
      <DescriptionCarousel />
      <Video />
      <Slider />
      <JugarButton />
      <DescriptionBox />
    </div>
  );
}

export default Home;
