import React from "react";
import FacebookIcon from "../../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../../assets/images/icon-pinterest.svg";
import InstagramIcon from "../../../assets/images/icon-instagram.svg";
import GetStartedDesktopBG from "../../../assets/images/bg-boost-desktop.svg";
import GetStartedMobileBG from "../../../assets/images/bg-boost-mobile.svg";
import styled from "styled-components";
import Button from "../../../components/Button";

const GetStarted = styled.div`
	background-color: ${props => props.theme.primaryColor2};
	background-image: url(${GetStartedDesktopBG});
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8rem 0rem;
	h1 {
		color: white;
		margin-bottom: 2rem;
	}
	@media (max-width: 735px) {
		background-image: url(${GetStartedMobileBG});
	}
`;

const FooterNav = styled.div`
	background-color: ${props => props.theme.neutralColor4};
	padding: 7rem 14rem;
	display: flex;
	@media (max-width: 1250px) {
		padding: 7rem 3rem;
	}
	@media (max-width: 735px) {
		padding: 5rem 3rem;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
`;
const Logo = styled.div`
	width: 30%;
	h1 {
		color: white;
	}
	@media (max-width: 735px) {
		text-align: center;
		width: 100%;
	}
`;
const FooterNavListContainer = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-evenly;
	@media (max-width: 735px) {
		width: 100%;
		flex-direction: column;
		text-align: center;
	}
`;
const FooterNavList = styled.div`
	h4 {
		color: white;
		margin-bottom: 1rem;
	}
	p {
		margin-bottom: 0.5rem;
		&:hover {
			cursor: pointer;
			color: ${props => props.theme.primaryColor1};
		}
	}
	@media (max-width: 735px) {
		margin: 3rem 0rem;
	}
`;
const IconGroup = styled.div`
	img {
		margin: 0rem 1rem;
		&:hover {
			cursor: pointer;
		}
	}
`;

const Footer = () => {
	return (
		<footer>
			<GetStarted>
				<h1>Boost your links today</h1>
				<Button pill>Get Started</Button>
			</GetStarted>
			<FooterNav>
				<Logo>
					<h1>Shorting U</h1>
				</Logo>
				<FooterNavListContainer>
					<FooterNavList>
						<h4>Features</h4>
						<p>Link Shortening</p>
						<p>Branded</p>
						<p>Links</p>
						<p>Analytics</p>
					</FooterNavList>
					<FooterNavList>
						<h4>Resources</h4>
						<p>Blog</p>
						<p>Developers</p>
						<p>Support</p>
					</FooterNavList>
					<FooterNavList>
						<h4>Company</h4>
						<p>About</p>
						<p>Our Team</p>
						<p>Careers</p>
						<p>Contact</p>
					</FooterNavList>
					<IconGroup>
						<img src={FacebookIcon} alt="Facebook" />
						<img src={TwitterIcon} alt="Twitter" />
						<img src={PinterestIcon} alt="Pinterest" />
						<img src={InstagramIcon} alt="Instagram" />
					</IconGroup>
				</FooterNavListContainer>
			</FooterNav>
		</footer>
	);
};

export default Footer;
