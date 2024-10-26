import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import tiranikLogo from "../../images/tiranik_logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
      <div className="p-6 flex flex-row justify-between xl:justify-end xl:gap-24">
        <div className="flex flex-col gap-2">
          <span>Tiranik Games</span>
          <span className="text-gray-200 text-xs">Torenlaan 5B</span>
          <span className="text-gray-200 text-xs">1402 AT</span>
          <span className="text-gray-200 text-xs">Bussum</span>
          <span className="text-gray-200 text-xs">Netherlands</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/privacy-policy" className="text-blue-500 text-xs">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-blue-500 text-xs">
            Terms of Service
          </Link>
          <Link to="/cookie-policy" className="text-blue-500 text-xs">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
