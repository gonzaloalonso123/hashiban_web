import "./Text.css";
import BookMerchant from "../../images/book_merchant.png";
import { motion } from "framer-motion";
import { useScroll } from "../../providers/ScrollProvider";

interface props {
  text: string;
}
function Text({ text }: props) {
  return (
    <div className="introduction-section">
      <div className="introduction">
        <p>{text}</p>
      </div>
    </div>
  );
}

const TextWitMerchant = ({ text }: props) => (
  <div>
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="book-merchant-container">
        <motion.img
          src={BookMerchant}
          className="book-merchant"
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      </div>
      <div className="description-carousel">
        <p className="scroll-text">{text}</p>
      </div>
    </motion.div>
  </div>
);

export { Text, TextWitMerchant };
