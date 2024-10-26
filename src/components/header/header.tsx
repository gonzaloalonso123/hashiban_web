import "./header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

function Header({ setBuyTab, buyTab }: props) {
  const { t } = useTranslation();
  const [blackHeader, setBlackHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > document.body.scrollHeight / 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  const handleBuyBar = () => setBuyTab(!buyTab);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        blackHeader
          ? "bg-gradient-to-b from-black to-black xl:to-transparent"
          : ""
      } py-2 w-full fixed flex justify-between flex-col xl:flex-row`}
    >
      <div>
        <a className="logo xl:invisible">{t("game_name")}</a>
      </div>
      <nav>
        <button
          onClick={handleBuyBar}
          className="text-lg xl:text-xl px-4 py-1 bg-blue-800 hover:bg-blue-500 transition-all hover:shadow-md font-black rounded-xl shadow-md"
        >
          {t("buy")}
        </button>
        {/* <Link to="/subasta" className="std-button">
          Subastas
          <img src={One} className="std-button-notification" />
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;
