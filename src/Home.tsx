import "./styles/App.css";
import Header from "./components/Header/header";
import ImageTop from "./components/ImageTop/ImageTop";
import { TextWitMerchant } from "./components/IntroductoryText/Text";
import { useState } from "react";
import NavBar from "./components/BuyTab/BuyTab";
import BasicInfo from "./components/BasicInfoDisplay/BasicInfo";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import Contact from "./components/Contact/Contact";
import { useTranslation } from "react-i18next";
import { Music } from "./components/Music/Music";
import ImageBottom from "./components/ImageBot/ImageBottom";
import { ScrollProvider } from "./providers/ScrollProvider";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [buyTab, setBuyTab] = useState(false);
  const [contactEnabled, setContactEnabled] = useState(false);
  const { t } = useTranslation();
  return (
    <ScrollProvider>
      <div className="main">
        {contactEnabled && <Contact setContactEnabled={setContactEnabled} />}
        <NavBar setBuyTab={setBuyTab} buyTab={buyTab} />
        <Header setBuyTab={setBuyTab} buyTab={buyTab} />
        <ImageTop setLoaded={setLoaded} />
        {!loaded && <Spinner />}
        {loaded && (
          <>
            <TextWitMerchant text={t("description")} />
            <ImageBottom />
            <BasicInfo />
            <Music />
            {/* <Obtain openBuyTab={() => setBuyTab(true)} /> */}
            <Footer setContactEnabled={setContactEnabled} />
          </>
        )}
      </div>
    </ScrollProvider>
  );
}

export default Home;
