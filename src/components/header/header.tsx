import "./header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../providers/ScrollProvider";
import { motion } from "framer-motion";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

function Header({ setBuyTab, buyTab }: props) {
  const { t } = useTranslation();
  const [blackHeader, setBlackHeader] = useState(false);
  const currentScroll = useScroll();

  const handleScroll = () => {
    if (currentScroll > document.body.scrollHeight / 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  const handleBuyBar = () => setBuyTab(!buyTab);

  useEffect(() => {
    handleScroll();
  }, [currentScroll]);

  return (
    <header
      className={`${
        blackHeader
          ? "bg-gradient-to-b from-black to-black xl:to-transparent"
          : ""
      } py-2 w-full fixed flex justify-between flex-col xl:flex-row`}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <a
          className={`logo xl:hidden`}
        >
          {t("game_name")}
        </a>
      </motion.div>
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
