import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ style, textButton, ...rests }) => {
	return (
		<Button style={style} {...rests}>
			<span>{textButton}</span>
		</Button>
	);
};

export default ButtonComponent;
