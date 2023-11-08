import { Checkbox, Rate } from "antd";
import React from "react";
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from "./style";

const NavBarComponent = () => {
	const renderContent = (type, options) => {
		switch (type) {
			case "text":
				return options.map((option, index) => {
					return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
				});
			case "checkbox":
				return (
					<Checkbox.Group style={{ width: "100%", display: "flex", flexDirection: "column" , gap: '12px'}} onChange={""}>
						{options.map((option, index) => {
                            return <Checkbox value={option.value} key={index}>{option.label}</Checkbox>
                        })}
					</Checkbox.Group>
				);
			case "star":
				return options.map((option, index) => {
                        return (
                            <div style={{display: "flex"}}>
                                <Rate disabled defaultValue={option} key={index} style={{fontSize: "12px"}}/>
                                <span style={{marginLeft: "10px"}}>from {option} star</span>
                            </div>
                        )
                    })
			case "price":
				return options.map((option, index) => {
                        return (
                            <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
                        )
                    })
			default:
				break
		}
	};
	return (
		<div style={{backgroundColor: ""}}>
			<WrapperLabelText>label</WrapperLabelText>
			<WrapperContent>
                {renderContent("text", ["tu li", "tv", "may machine"])}
            </WrapperContent>
			<WrapperContent>
                {renderContent("checkbox", [{value: "a", label: "A"}, {value: "b", label: "B"},{value: "c", label: "C"},])}
            </WrapperContent>
			<WrapperContent>
                {renderContent("star", [3, 4, 5])}
            </WrapperContent>
			<WrapperContent>
                {renderContent("price", ["duoi 40.000", "tren 50.000", "tren 1.000.000"])}
            </WrapperContent>
		</div>
	);
};

export default NavBarComponent;
