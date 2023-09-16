import "./styles/App.css";
import Header from "./components/header/header";
import ImageTop from "./components/image_top/image";
import Text from "./components/introductory_text/Text";
import DescriptionCarousel from "./components/card_display/description-carousel";
import { useState } from "react";
import NavBar from "./components/buy_tab/buy-tab";
import ImageBottom from "./components/image_bot/Image_bottom";
import texts from "./content/texts";
import Basic_info from "./components/basic_info_display/Basic_info";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import Contact from "./components/Contact/Contact";
import Crowd from "./components/CrowdCampain/Crowd";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [buyTab, setBuyTab] = useState(false);
  const [contactEnabled, setContactEnabled] = useState(false);
  const [crowdEnabled, setCrowdEnabled] = useState(true);

  return (
    <div className="main">
      {contactEnabled && <Contact setContactEnabled={setContactEnabled} />}
      {/* {crowdEnabled && <Crowd setCrowdEnabled={setCrowdEnabled}/>} */}
      <NavBar setBuyTab={setBuyTab} buyTab={buyTab} />
      <Header setBuyTab={setBuyTab} buyTab={buyTab} />
      <ImageTop setLoaded={setLoaded} />
      {!loaded && <Spinner />}
      {loaded && (
        <>
          <Text text={texts[0].description} />
          <ImageBottom />
          <Text text={texts[1].description} />
          <Basic_info />
          <Footer setContactEnabled={setContactEnabled} />
        </>
      )}
    </div>
  );
}

export default Home;
