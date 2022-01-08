import { GlobalStyleComponent, DefaultTheme, createGlobalStyle } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  :root {
    --default-color: #1976d2;
    --default-background: #eae9e9;
    --full-height: 100vh;
    --full-width: 100vw;
    --f-black: 'black';
    --f-blackItalic: 'blackItalic';
    --f-bold: 'bold';
    --f-boldItalic: 'boldItalic';
    --f-extraBold: 'extraBold';
    --f-extraBoldItalic: 'extraBoldItalic';
    --f-extraLight: 'extraLight';
    --f-extraLightItalic: 'extraLightItalic';
    --f-italic: 'italic';
    --f-light: 'light';
    --f-lightItalic: 'lightItalic';
    --f-medium: 'medium';
    --f-mediumItalic: 'mediumItalic';
    --f-regular: 'regular';
    --f-semiBold: 'semiBold';
    --f-semiBoldItalic: 'semiBoldItalic';
    --f-thin: 'thin';
    --f-thinItalic: 'thinItalic';
  }

  .f-black {
    font-family: var(--f-black);
  }

  .f-blackItalic {
    font-family: var(--f-blackItalic);
  }

  .f-bold {
    font-family: var(--f-bold);
  }

  .f-boldItalic {
    font-family: var(--f-boldItalic);
  }

  .f-extraBold {
    font-family: var(--f-extraBold);
  }

  .f-extraBoldItalic {
    font-family: var(--f-extraBoldItalic);
  }

  .f-extraLight {
    font-family: var(--f-extraLight);
  }

  .f-extraLightItalic {
    font-family: var(--f-extraLightItalic);
  }

  .f-italic {
    font-family: var(--f-italic);
  }
  
  .f-light {
    font-family: var(--f-light);
  }

  .f-lightItalic {
    font-family: var(--f-lightItalic);
  }

  .f-medium {
    font-family: var(--f-medium);
  }

  .f-mediumItalic {
    font-family: var(--f-mediumItalic);
  }

  .f-regular {
    font-family: var(--f-regular);
  }

  .f-semiBold {
    font-family: var(--f-semiBold);
  }

  .f-semiBoldItalic {
    font-family: var(--f-semiBoldItalic);
  }

  .fs-14 {
    font-size: 14px;
  }

  .fs-16 {
    font-size: 16px;
  }

  .fs-18 {
    font-size: 18px;
  }

  .fs-20 {
    font-size: 20px;
  }

  .fs-22 {
    font-size: 22px;
  }

  .fs-24 {
    font-size: 24px;
  }

  * {
    font-family: "regular";
  }

  body,
  html {
    background-color: var(--default-background);
    margin: 0;
    padding: 0;
    width: var(--full-width);
    height: var(--full-height);
    overflow: hidden;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    padding: 0;
    margin: 0;
  }
  
  .full-screen {
    width: var(--full-width);
    height: var(--full-height);
  }
  
  .full-height {
    height: var(--full-height);
  }
  
  .full-width {
    width: var(--full-width);
  }
  
  .wh-100 {
    width: 100%;
    height: 100%;
  }
  
  #__next {
    background: var(--default-background);
    width: var(--full-width);
    height: var(--full-height);
    overflow: hidden;
  }
  
  .c-blue {
    color: var(--defualt-color);
  }
  
  .c-white {
    color: white;
  }
  
  .c-deactive {
    color: rgb(255, 255, 255, 0.6);
  }
  
  .bg-default {
    background-color: var(--default-background);
  }
  
  .bg-white {
    background-color: white;
  }
  
  .bg-blue {
    background-color: var(--default-color);
  }

  .bo-blue {
    border-color: var(--defualt-color);
  }

  .box-shadow {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.15)
  }

  .mr-14 {
    margin-right: 14px;
  }

  .hover {
    cursor: pointer;
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background-color: inherit;
    border-radius: 6px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }

  *::-webkit-scrollbar:horizontal {
    background-color: rgba(0, 0, 0, 0.2);
    height: 4px;
  }

  *::-webkit-scrollbar-thumb:horizontal {
    border-radius: 4px;
  }
`;

export default GlobalStyle;
