import { Col, Pagination, Row } from "antd";
import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import { WrapperNavBar, WrapperProducts } from "./style";

const TypeProductPage = () => {
	return (
		<div style={{ padding: "0 120px", backgroundColor: "#efefef" }}>
			<Row style={{ flexWrap: "nowrap", paddingTop: "10px" }}>
				<WrapperNavBar span={4}>
					<NavBarComponent />
				</WrapperNavBar>
                <Col span={20}>
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                </Col>
			</Row>
			<Pagination total={200} onChange={""} style={{ textAlign: "center", marginTop: "10px" }} showSizeChanger={false}/>
		</div>
	);
};

export default TypeProductPage;
