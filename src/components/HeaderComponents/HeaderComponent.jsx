import { DownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader } from "./style";

const HeaderComponent = () => {
	return (
		<div>
			<WrapperHeader>
				<Col span={6}>
					<WrapperTextHeader>Christopher</WrapperTextHeader>
				</Col>
				<Col span={12}>
					<ButtonSearch
						size="large"
						text="Search"
						placeholder="Input search..."
					/>
				</Col>
				<Col span={6} style={{ display: "flex", gap: "3rem" }}>
					<WrapperHeaderAccount>
						<UserOutlined style={{ fontSize: "3rem" }} />
						<div>
							<span>Login/Logout</span>
							<div style={{ marginTop: "0.2rem" }}>
								<span style={{ marginRight: "0.5rem" }}>Account</span>
								<DownOutlined />
							</div>
						</div>
					</WrapperHeaderAccount>
					<div style={{ color: "#fff" }}>
						<ShoppingCartOutlined style={{ fontSize: "3rem" }} />
						<span>Cart</span>
					</div>
				</Col>
			</WrapperHeader>
		</div>
	);
};

export default HeaderComponent;
