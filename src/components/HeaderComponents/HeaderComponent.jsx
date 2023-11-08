import { DownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Col } from "antd";
import React from "react";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader } from "./style";

const HeaderComponent = () => {
	return (
		<div>
			<WrapperHeader>
				<Col span={6}>
					<WrapperTextHeader>Christopher</WrapperTextHeader>
				</Col>
				<Col span={12}>
					<ButtonInputSearch
						size="larger"
						placeholder="Search more ..."
						textButton="Tim Kim"
						bordered={false}
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
						<Badge count={4} size="small">
							<ShoppingCartOutlined style={{ fontSize: "3rem", color: "#fff" }} />
						</Badge>
						<span>Cart</span>
					</div>
				</Col>
			</WrapperHeader>
		</div>
	);
};

export default HeaderComponent;
