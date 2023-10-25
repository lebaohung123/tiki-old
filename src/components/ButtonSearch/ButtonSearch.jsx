import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { WrapperButtonSearch } from "./style";
import { Button, Input } from "antd";

const ButtonSearch = (props) => {
	const {
		size,
		text,
		placeholder,
		bordered,
		backgroundColorInput,
		backgroundColorButton,
	} = props;
	return (
		<WrapperButtonSearch style={{ borderRadius: "6px" }}>
			<Input
				size={size}
				placeholder={placeholder}
				bordered={bordered}
				style={{
					borderRadius: "6px 0 0 6px",
					border: "none",
					backgroundColor: "#fff",
					backgroundColor: backgroundColorInput,
				}}
			/>
			<Button
				size={size}
				icon={<SearchOutlined />}
				style={{
					borderRadius: "0 6px 6px 0",
					padding: "5px 9px",
					height: "38px",
					border: "none",
					backgroundColor: "#fff",
					backgroundColor: backgroundColorButton,
				}}>
				{text}
			</Button>
		</WrapperButtonSearch>
	);
};

export default ButtonSearch;
