import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MusicImage from '../../images/music.webp';
import Youtube from '../../images/youtube.png';
import Spotify from '../../images/spotify.png';
import Mail from '../../images/email.png';


export const Music = () => {
	const { t } = useTranslation();
	return (
		<motion.div
			className="mx-auto max-w-6xl p-10"
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="xl:ml-48">
				<h1 className="text-4xl font-hashiban text-white">♪ {t("music_title")}</h1>
				<p className="text-xl py-10">{t("music_subtitle")}</p>
				<div className="flex flex-col md:flex-row items-center gap-4 w-full">
					<img src={MusicImage} alt="Music" className="rounded-md w-full max-w-[300px]" />
					<div className="flex flex-col w-full">
						<OpenInCard
							image={Youtube}
							text="Open In Youtube"
						/>
						<OpenInCard
							image={Spotify}
							text="Open In Spotify"
							action={() => window.open("https://open.spotify.com/intl-es/album/1zhm260xqksGv5iw73wgWH?si=7uXhIbYWTieRjD93UcOcJg", "_blank")}
						/>
						<OpenInCard
							image={Mail}
							text="Receive through email"
						/>
					</div>
				</div></div>
		</motion.div>
	);
};

const OpenInCard = ({ image, text, action }) => {
	return (
		<div className="bg-white/20 rounded-lg w-full flex gap-4 group items-center shadow-xl p-4 my-4 cursor-pointer hover:scale-[101%]"
			onClick={action}
		>
			<img src={image} alt={text} className="h-10" />
			<h2 className="text-xl text-gray-200 group-hover:text-white">{text}</h2>
		</div>
	);
}
