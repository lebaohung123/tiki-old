import { Col, Image, Row } from "antd";
import React from "react";
import ImgProduct from "../../assets/hinh-sp.png";
import ImgProductSmall from "../../assets/hinh-sp-small.png";
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct } from "./style";
import { StarFilled } from "@ant-design/icons";

const ProductDetailsComponents = () => {
	return (
		<Row style={{ padding: "16px", backgroundColor: "#fff" }}>
			<Col span={10}>
				<Image src={ImgProduct} preview={false} />
				<Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
					<WrapperStyleColImage span={4}>
						<WrapperStyleImageSmall src={ImgProductSmall} preview={false} />
					</WrapperStyleColImage>
				</Row>
			</Col>
			<Col span={14}>
        <WrapperStyleNameProduct>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam numquam animi excepturi?</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54)"}}/>
          <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54)"}}/>
          <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54)"}}/>
          <StarFilled style={{fontSize: "12px", color: "rgb(253, 216, 54)"}}/>
        </div>
      </Col>
		</Row>
	);
};

export default ProductDetailsComponents;
