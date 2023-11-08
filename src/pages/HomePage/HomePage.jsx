import React from "react";
import slider1 from "../../assets/slide1.jpg";
import slider2 from "../../assets/slide2.jpg";
import slider3 from "../../assets/slide3.jpg";
import CardComponent from '../../components/CardComponent/CardComponent';
import SliderComponent from "../../components/SliderComponents/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";

const HomePage = () => {
	const arr = ["TV", "Tu Lanh", "Laptop"];
	return (
		<>
			<div style={{ padding: "0 120px" }}>
				<WrapperTypeProduct>
					{arr.map((item) => {
						return <TypeProduct name={item} key={item} />;
					})}
				</WrapperTypeProduct>
			</div>
			<div id="container" style={{ backgroundColor: "#efefef", padding: "0 120px"}}>
				<SliderComponent arrImages={[slider1, slider2, slider3]} />
				<WrapperProducts >
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
				</WrapperProducts>
				<div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10px"}}>
					<WrapperButtonMore textButton="Watch More" type="outline" style={{border: "1px solid rgb(11, 116, 229)", color: "rgb(11, 116, 229)", backgroundColor: "#fff", width: "240px", height: "38px", borderRadius: "4px", fontWeight: "400"}} />
				</div>
			</div>
		</>
	);
};

export default HomePage;
