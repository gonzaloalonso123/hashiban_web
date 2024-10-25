import GameBox from "../../images/producto2.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Obtain.css";

interface props {
  openBuyTab: any;
}
function Obtain({ openBuyTab }: props) {
  const { t } = useTranslation();
  const isPhone = window.innerWidth < 768;
  return (
    <motion.div
      className="mx-auto max-w-6xl p-10 flex justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="xl:ml-48 rounded-xl border-white border-2 p-2 px-4 w-fit">
        <div className="flex flex-col max-w-4xl justify-center items-center">
          <p className="text-4xl py-3">{t("what_is_it")}</p>
          <img src={GameBox} alt="" className="w-36 h-auto" />
          <button
            onClick={openBuyTab}
            className="text-xl bg-blue-500 text-white rounded-xl font-bold p-4 w-fit mt-10"
          >
            {t("buy")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default Obtain;
