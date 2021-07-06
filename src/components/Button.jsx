import styled from "styled-components";

const Button = styled.button`
	color: ${props => (props.text ? props.theme.primaryColor1 : "#fff")};
	background-color: ${props =>
		props.text ? "transparent" : props.theme.primaryColor1};
	padding: ${props => (props.large ? "1.2rem 4rem" : "1rem 2.5rem")};
	margin: ${props => (props.large ? "4rem 0rem" : "0rem 1rem")};
	font-weight: 500;
	font-size: ${props => (props.large ? "2.4rem" : "1.8rem")};
	border-radius: ${props => (props.pill ? "1000px" : "10px")};
	font-weight: 700;
	&:hover {
		background-color: ${props =>
			props.text ? "transparent" : props.theme.primaryLightColor};
	}
`;

export default Button;
