import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import menu from "../assets/images/menu.svg";
const Nav = styled.nav`
	padding: 0rem 10rem;
	height: 12vh;
	display: flex;
	align-items: center;
	background-color: white;
	position: relative;
	@media (max-width: 1250px) {
		padding: 0rem 3rem;
	}
	@media (max-width: 735px) {
		justify-content: space-between;
	}
`;

const Menu = styled.div`
	display: none;
	img {
		width: 3rem;
		height: 3rem;
	}
	@media (max-width: 735px) {
		display: block;
		&:hover {
			cursor: pointer;
		}
	}
`;

const NavGroup = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 735px) {
		&.open {
			left: 0;
			margin: 0rem 5vw;
		}
		position: fixed;
		top: 12vh;
		left: -100%;
		z-index: 1000;
		transition: 0.4s all ease-in;
		height: 330px;
		width: 90vw;
		padding: 3rem 0rem;
		background-color: ${props => props.theme.primaryColor2};
		border-radius: 5px;
		flex-direction: column;
		justify-content: space-evenly;
	}
`;

const Logo = styled.h1`
	margin: 0rem 2rem;
	color: ${props => props.theme.neutralColor3};
	font-size: 3rem;
`;

const NavItemList = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 735px) {
		margin: 0rem 3rem;
		width: 90%;
		flex-direction: column;
		justify-content: space-evenly;
		border-bottom: ${props =>
			props.borderBottom
				? ".5px solid" + props.theme.neutralColor1
				: "none"};
	}
`;
const NavItem = styled.div`
	font-size: 1.6rem;
	margin: 0rem 3rem;
	color: ${props => props.theme.neutralColor2};
	font-weight: 500;
	&:hover {
		color: ${props => props.theme.neutralColor3};
		cursor: pointer;
	}
	@media (max-width: 735px) {
		font-size: 2rem;
		color: white;
		margin: 2rem 0rem;
		&:hover {
			color: white;
			cursor: pointer;
		}
	}
`;

const NavButton = styled(Button)`
	margin: 1rem 0rem;
	@media (max-width: 735px) {
		width: 100%;
	}
`;

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Nav>
			<Logo>Shortly</Logo>
			<Menu onClick={() => setMenuOpen(prev => !prev)}>
				<img src={menu} alt="Menu" />
			</Menu>
			<NavGroup className={menuOpen ? "open" : "close"}>
				<NavItemList borderBottom>
					<NavItem>Features</NavItem>
					<NavItem>Pricing</NavItem>
					<NavItem>Resources</NavItem>
				</NavItemList>
				<NavItemList>
					<NavButton text>Login</NavButton>
					<NavButton pill>Sign Up</NavButton>
				</NavItemList>
			</NavGroup>
		</Nav>
	);
};

export default Navbar;
