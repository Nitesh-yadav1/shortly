import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

const theme = {
	primaryColor1: "#2acfcf",
	primaryColor2: "#3b3054",
	primaryLightColor: "#9AE3E0",
	secondaryColor: "#f46262",
	neutralColor1: "#bfbfbf",
	neutralColor2: "#9e9aa7",
	neutralColor3: "#35323e",
	neutralColor4: "#232127",
};

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Navbar />
				<Home />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
