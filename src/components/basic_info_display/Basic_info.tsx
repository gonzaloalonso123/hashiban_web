import React from "react";
import Caracteristicas from "../../images/Caracteristicas.webp";
import Juego from "../../images/El juego.webp";
import Componentes3 from "../../images/Componentes XL.webp";
import "./basic_info.css";
import { motion } from "framer-motion";
import DescriptionCarousel from "../card_display/description-carousel";

function Basic_info() {
  return (
    <div className="basic-info-display_carousel">
      <motion.img
        src={Juego}
        alt=""
        className="basic-info-display_image"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src={Caracteristicas}
        alt=""
        className="basic-info-display_image"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      />
      <DescriptionCarousel />
      <motion.img
        src={Componentes3}
        alt=""
        className="basic-info-display_image"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  );
}

export default Basic_info;
