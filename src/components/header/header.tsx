import "./header.css";
import Logo from "../../images/logo.png";
import { useEffect, useState } from "react";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

function Header({ setBuyTab, buyTab }: props) {
  const [blackHeader, setBlackHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > document.body.scrollHeight / 5) {
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
      id="header"
      style={{ backgroundColor: blackHeader ? "#111111" : "" }}
    >
      <div>
        <a className="logo">La subasta de Hashiban</a>
      </div>
      <nav>
        <a onClick={handleBuyBar}>
          Comprar
        </a>
        <a href="#">Instrucciones</a>
      </nav>
    </header>
  );
}

export default Header;
