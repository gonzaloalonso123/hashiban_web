import { motion } from "framer-motion";
import '../styles/App.css';
import cards from '../content/IntroductionImages';
import SliderCard from "./sliderCard";
import descriptions from '../content/descriptions';

function DescriptionCarousel() {

    return (
		<div className='description-carousel'>
					{cards.map((card, i) => {
						return (
							<motion.div className='item'>
								<SliderCard image={card} description={descriptions[i]}/>
							</motion.div>
						);
					})}
		</div>
    );
}

export default DescriptionCarousel;