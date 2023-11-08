import StartFilled from "@ant-design/icons/StarFilled";
import React from "react";
import label from "../../assets/label.png";
import {StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText} from "./style";
const CardComponent = () => {
	return (
		<WrapperCardStyle
			hoverable
			headStyle={{ width: "200px", height: "200px" }}
			style={{ width: 200 }}
			bodyStyle={{ padding: "10px" }}
			cover={
				<img
					alt="example"
					src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
				/>
			}>
			<WrapperImageStyle src={label} alt="logo" />
			<StyleNameProduct>Iphone 13</StyleNameProduct>
			<WrapperReportText>
				<span style={{ marginRight: "4px" }}>
					<span>4.96</span> <StartFilled style={{ fontSize: "12px", color: "yellow" }} />
				</span>
				<span> | da ban 1000+</span>
			</WrapperReportText>
			<WrapperPriceText>
				19.000.000 <WrapperDiscountText> -5%</WrapperDiscountText>
			</WrapperPriceText>
		</WrapperCardStyle>
	);
};

export default CardComponent;
