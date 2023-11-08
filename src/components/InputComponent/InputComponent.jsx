import { Input } from "antd";
import React from "react";

const InputComponent = ({ style, ...rests }) => {
	return <Input style={style} {...rests} />;
};

export default InputComponent;
