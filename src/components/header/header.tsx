import "./header.css";
import Logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import One from "../../images/uno.png";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

function Header({ setBuyTab, buyTab }: props) {
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
    <header style={{ backgroundColor: blackHeader ? "#111111" : "" }}>
      <div>
        <a className="logo">La subasta de Hashiban</a>
      </div>
      <nav>
        <a onClick={handleBuyBar} className="std-button">
          Comprar
        </a>
        <Link to="/instrucciones" className="std-button">
          Instrucciones
        </Link>
        <Link to="/subasta" className="std-button">
          Subastas
          <img src={One} className="std-button-notification" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
