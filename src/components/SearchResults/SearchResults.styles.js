import { Spin } from "antd";
import styled from "styled-components";

export const Loader = styled(Spin)``;

export const ErrorWrapper = styled.div`
	color: red;
	border: 2px solid red;
	font-weight: bold;
	font-size: 1.6rem;
	border-radius: 12px;
	padding: 0 12px;
	display: flex;
	align-items: center;
`;

export const ResponseWrapper = styled.div`
	border: 2px solid #f7931a;
	// color: #f7931a;
	padding: 1.6rem;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
`;

export const TitleWrapper = styled.div`
	font-size: 1.6rem;
	color: #f7931a;
	margin-bottom: 1rem;
`;

export const DataWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;

export const DataBoldLabel = styled.div`
	font-weight: bold
`;
export const SubTitleLabel = styled.div`
	font-weight: bold;
	font-size: 1.6rem;
	text-decoration: underline;
	margin-bottom: 1rem;
`;
