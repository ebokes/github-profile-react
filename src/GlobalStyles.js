import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    @media screen and (max-width: ${({ theme }) => theme.screens.lg}){
        font-size: 60%;    
    }
}

body{
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.color.bg2};
    margin: 0;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

`;
