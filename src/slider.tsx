import React, { createRef, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import './App.css';
import cards from './cards';


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
			<p className='title-slider'>EXPOSITOR DE OBJETOS</p>
			<motion.div ref={carousel} className='carousel' whileTap = {{cursor: "grabbing" }}>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width * 0.1}}
					className='inner-carousel'>
					{cards.map((card) => {
						return (
							<motion.div className='item'>
								<img src={card} alt="" />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
    );
}

export default Slider;