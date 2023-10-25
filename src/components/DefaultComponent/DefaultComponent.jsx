import React from "react";
import HeaderComponent from "../HeaderComponents/HeaderComponent";

const DefaultComponent = ({ children }) => {
	return (
		<>
			<HeaderComponent />
			{children}
		</>
	);
};

export default DefaultComponent;
