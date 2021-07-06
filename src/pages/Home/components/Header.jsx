import React from "react";
import styled from "styled-components";
import headerImageSrc from "../../../assets/images/illustration-working.svg";
import Button from "../../../components/Button";

const Container = styled.header`
	display: flex;
	align-items: center;
	padding: 0rem 14rem 14rem 14rem;

	position: relative;
	background-color: white;
	overflow-x: hidden;
	@media (max-width: 1250px) {
		padding: 0rem 5rem 14rem 5rem;
	}
	@media (max-width: 735px) {
		flex-direction: column;
		padding: 0rem 5rem 14rem 5rem;
	}
`;

const MainContent = styled.div`
	margin: 10rem 0rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	@media (max-width: 735px) {
		order: 2;
		align-items: center;
	}
`;

const HeaderImg = styled.img`
	position: absolute;
	top: 40%;
	transform: translateY(-50%);
	right: -12rem;
	width: 75rem;
	@media (max-width: 1250px) {
		width: 60rem;
	}
	@media (max-width: 885px) {
		width: 55rem;
	}
	@media (max-width: 735px) {
		order: 1;
		position: relative;
		top: 3rem;
		transform: translateY(0);
		width: 80rem;
	}
	@media (max-width: 615px) {
		width: 60rem;
	}
`;

const Heading = styled.h1`
	font-size: 8rem;
	width: 50%;
	line-height: 1.2;
	@media (max-width: 1250px) {
		font-size: 6rem;
		width: 60%;
	}
	@media (max-width: 735px) {
		width: 100%;
		text-align: center;
	}
`;

const Description = styled.p`
	font-size: 2.4rem;
	width: 50%;
	@media (max-width: 1250px) {
		font-size: 2rem;
	}
	@media (max-width: 735px) {
		width: 100%;
		text-align: center;
	}
`;

const Header = () => {
	return (
		<Container>
			<MainContent>
				<Heading>More than just shorter links</Heading>
				<Description>
					Build your brand’s recognition and get detailed insights on
					how your links are performing.
				</Description>
				<Button filled large pill>
					Get Started
				</Button>
			</MainContent>
			<HeaderImg src={headerImageSrc} alt="header-working"></HeaderImg>
		</Container>
	);
};

export default Header;
