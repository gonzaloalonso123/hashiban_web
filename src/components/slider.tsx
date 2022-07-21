import React, { createRef, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import '../styles/App.css';
import cards from '../content/SliderImages';
import SliderCard from './sliderCard';

function Slider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth);
        }
    })

    return (
		<div className='slider'>
			<p className='title-slider'>Expositor de objetos</p>
			<p className='sliderDescription'>Un pequeño muestrario a los objetos por los que pelean en estos momentos los furiosos trasgos. Los demás, aún están ocultos en la pila...</p>
			<motion.div ref={carousel} className='carousel' whileTap = {{cursor: "grabbing" }}>
				<motion.div
					drag='x'
					dragConstraints={{ right: 260, left: (-cards.length -  4) * 85}}
					className='inner-carousel'>
					{cards.map((card, i) => {
						return (
							<motion.div className='item'>
								{/* <SliderCard image={card}/> */}
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
    );
}

export default Slider;