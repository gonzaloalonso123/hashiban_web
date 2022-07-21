import React from "react";


interface IProps {
	image: string,
	setCurrentDescription: React.Dispatch<React.SetStateAction<any>>,
	id: number
}

const SliderCard = ({ image, setCurrentDescription, id }: IProps) => {

	const buttonMouseOverHandler = () => {
		setCurrentDescription(id);
	};

	const buttonMouseOutHandler = () => {
		setCurrentDescription(undefined);
	};

	return (
		<div className="slider-card item" onMouseOver={buttonMouseOverHandler} onMouseOut={buttonMouseOutHandler}>
			<img src={image} alt="" />
		</div>
	);
}

export default SliderCard;