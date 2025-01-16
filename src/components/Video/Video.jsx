import { useTranslation } from "react-i18next";
import "./Video.css";
import { motion } from "framer-motion";

export const VideoPlayer = () => {
	const { t } = useTranslation();

	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="xl:ml-48">
				{/* <h1 className="text-4xl py-6 font-hashiban text-white">
                    {t("how_to_play")}
                </h1> */}
				<iframe
					className="w-full my-4 rounded-xl"
					sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
					height="400"
					src="https://www.youtube.com/embed/4yalVQtYpjg?rel=0&modestbranding=1&autoplay=1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</motion.div>
	);
};