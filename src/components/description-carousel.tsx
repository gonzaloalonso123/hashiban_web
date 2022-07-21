import { motion } from "framer-motion";
import '../styles/App.css';
import cards from '../content/IntroductionImages';
import SliderCard from "./sliderCard";
import descriptions from "../content/descriptions";

interface IProps {
	setCurrentDescription: React.Dispatch<React.SetStateAction<any>>,
	currentDescription: number
}

const DescriptionCarousel = ({ setCurrentDescription, currentDescription }: IProps) => {

	return (
		<div>
			<div className='description-carousel'>
				{cards.map((card, key) => {
					return (
						<SliderCard image={card} setCurrentDescription={setCurrentDescription} key={key} id={key} />
					);
				})}

			</div>
			<div className="description-carousel-text">{currentDescription !== -1 ? descriptions[currentDescription] : ""}</div>
		</div>
	);
}

export default DescriptionCarousel;