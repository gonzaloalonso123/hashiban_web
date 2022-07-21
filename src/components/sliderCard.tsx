import React from "react";


interface IProps {
    image: string
    description: string
}

const SliderCard = ({image, description}: IProps) => {
   return (
        <div className="slider-card">
            <img src={image} alt="" />
            <p className="slider-text">{description}</p>
        </div>
   );
}

export default SliderCard;