import './card_display.css';
import cards from '../../content/IntroductionImages';
import SliderCard from "./sliderCard";
import descriptions from "../../content/descriptions";

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
			<div className= {currentDescription !== -1 ? "description-carousel-text" : "description-carousel-text invisible"}>{currentDescription !== -1 ? descriptions[currentDescription] : ""}</div>
		</div>
	);
}

export default DescriptionCarousel;