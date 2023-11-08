import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
	padding: 1rem 12rem;
	background-color: rgb(26, 148, 255);
	align-items: center;
	flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
	font-size: 1.8rem;
	color: #fff;
	font-weight: bold;
`;

export const WrapperHeaderAccount = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
	gap: 1rem;
	font-size: 1.2rem;
	margin-left: auto;
`;

export const WrapperTextHeaderIcon = styled.div`
	font-size: 3rem;
`;
