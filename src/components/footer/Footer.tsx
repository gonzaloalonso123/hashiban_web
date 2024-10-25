import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import tiranikLogo from "../../images/tiranik_logo.png";
import { useTranslation } from "react-i18next";

interface IFooterProps {
  setContactEnabled: React.Dispatch<React.SetStateAction<any>>;
}

function Footer({ setContactEnabled }: IFooterProps) {
  const { t } = useTranslation();
  return (
    <div>
      <nav className="flex gap-4 justify-center py-4 lg:justify-end px-4 mt-48">
        <a
          onClick={() => setContactEnabled(true)}
          className="std-button contact-icon"
        >
          <MdMailOutline />
        </a>
        <a
          href="https://www.instagram.com/hashiban_es/"
          className="std-button ig-icon"
        >
          <IoLogoInstagram />
        </a>
        <img src={tiranikLogo} alt="" className="w-24 rounded-xl" />
      </nav>
    </div>
  );
}

export default Footer;
