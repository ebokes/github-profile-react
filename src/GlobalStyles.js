import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: Inter, Avenir, Helvetica, Arial, sans-serif; */
    /* color: rgba(255, 255, 255, 0.87);
  background-color: #242424; */
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    @media screen and (max-width: ${({ theme }) => theme.screens.lg}){
        font-size: 60%;    
    }

    /* @media screen and (max-width: ${({ theme }) => theme.screens.md}){
        font-size: 58%;
    }

    @media screen and (max-width: ${({ theme }) => theme.screens.xsm}){
        font-size: 54%;
    }
    @media screen and (max-width: 340px){
        font-size: 50%;
    } */
}

body{
    /* font-family: "Mulish", sans-serif; */
    font-size: 1.6rem;
    /* background-color: #0a192f; */
    /* position: relative; */
    /* min-height: calc(100vh - 78.5px); */
    /* height: 100%;
    margin: 0; */
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

`;
