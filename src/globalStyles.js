import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
        @media (min-width: 1920px) {
            font-size: 80%;
	    }
        @media (min-width: 2560px) {
            font-size: 100%;
	    }
        @media (min-width: 3840px) {
            font-size: 150%;
	    }
        @media (max-width: 1005px) {
            font-size: 55%;
	    }
        @media (max-width: 770px) {
            font-size: 52%;
	    }
        @media (max-width: 400px) {
		    font-size: 45%
	    }
    }
    body{
        font-family: 'Poppins',sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        color: #9e9aa7;
        background-color: #F0F1F6;
    }
    button{
        font-size: 1.8rem;
        font-family: 'Poppins',sans-serif;
        border: none;
        outline: none;
        &:hover {
		    cursor: pointer;
	    }
    }
    
    input{
        font-size: 1.6rem;
        font-family: 'Poppins',sans-serif;
        border: none;
	    outline: none;
	    &:focus {
		    border: none;
		    outline: none;
	    }
    }
    h1,h2,h3,h4,h5,h6{
        color: #35323e;
    }
`;

export default GlobalStyle;
