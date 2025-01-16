import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MusicImage from '../../images/music.webp';
import Youtube from '../../images/youtube.png';
import Spotify from '../../images/spotify.png';
import Mail from '../../images/email.png';
import './Music.css';


export const Music = () => {
	const { t } = useTranslation();
	return (
		<motion.div
			className="max-w-5xl mx-auto p-10 music-container"
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<h1 className="text-4xl font-hashiban text-white">♪ {t("music_title")}</h1>
			<p className="text-sm xl:text-xl py-4">{t("music_subtitle")}</p>
			<div className="flex flex-col md:flex-row gap-4 w-full">
				<img src={MusicImage} alt="Music" className="rounded-md w-full max-w-[400px]" />
				<div className="flex flex-col w-full">
					<OpenInCard
						image={Youtube}
						text={t('open_in_youtube')}
					/>
					<OpenInCard
						image={Spotify}
						text={t('open_in_spotify')}
						action={() => window.open("https://open.spotify.com/intl-es/album/1zhm260xqksGv5iw73wgWH?si=7uXhIbYWTieRjD93UcOcJg", "_blank")}
					/>
					<OpenInCard
						image={Mail}
						text={t('receive_by_email')}
					/>
				</div>
			</div>
		</motion.div >
	);
};

const OpenInCard = ({ image, text, action }) => {
	return (
		<div className="bg-white/20 rounded-lg w-full flex gap-4 group items-center shadow-xl p-2 xl:p-4 my-2 cursor-pointer hover:scale-[101%]"
			onClick={action}
		>
			<img src={image} alt={text} className="h-5 md:h-8 xl:h-10" />
			<h2 className="text-md md:text-xl text-gray-200 group-hover:text-white">{text}</h2>
		</div>
	);
}
