import "./Text.css";
import BookMerchant from "../../images/book_merchant.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const IntroductoryText = () => {
	const { t } = useTranslation();

	return (
		<div>
			<motion.div
				className="container px-14 xl:px-20 pb-24 pt-4 text-black text-center"
				initial={{ opacity: 0, scale: 0.4 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
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
				<h1 className="text:lg md:text-xl font-bold mb-6 text-gray-800">{t("description_title")}</h1>
				<div className="flex flex-col">
					<OneParagraph>{t("description_paragraph_1")}</OneParagraph>
					<OneParagraph>{t("description_paragraph_2")}</OneParagraph>
					<OneParagraph>{t("description_paragraph_3")}</OneParagraph>
					<OneParagraph>{t("description_paragraph_4")}</OneParagraph>
				</div>
			</motion.div>
		</div>
	);
};

const OneParagraph = ({ children }) => (
	<p className="text-paragraph mb-5">{children}</p>
);

