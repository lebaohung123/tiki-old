import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

const ButtonInputSearch = ({ size, placeholder, textButton = "Search", backgroundColorInput = "#fff", backgroundColorButton ="rgb(13, 92, 182)", bordered , colorButton = "#fff"}) => {
	return (
		<div style={{ display: "flex" }}>
			<InputComponent
				placeholder={placeholder}
				size={size}
				bordered={bordered}
				style={{ backgroundColor: backgroundColorInput, borderRadius: "6px 0 0 6px" }}
			/>
			<ButtonComponent
				size={size}
				icon={<SearchOutlined />}
				bordered={bordered}
				style={{ borderRadius: "0 6px 6px 0", border: "none", backgroundColor: backgroundColorButton, color: colorButton}}
				textButton={textButton}
			/>
		</div>
	);
};

export default ButtonInputSearch;
