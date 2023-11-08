import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
const SliderComponent = ({ arrImages }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
	};
	return (
		<Slider {...settings}>
			{arrImages.map((item, index) => {
				return <Image src={item} alt="slider" key={index} width="100%" height="600px" />;
			})}
		</Slider>
	);
};

export default SliderComponent;
