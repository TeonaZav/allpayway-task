import { createGlobalStyle } from "styled-components";
import backgroundImage from "./../assets/images/main-bg.png";

export const GlobalStyle = createGlobalStyle` 

  :root {
    /* Colors */
    --clr-bg-primary: #ffffff;

    --clr-text-primary: #FBFBFB;
    --clr-text-secondary: #000;
    --clr-text-tertiary: #FBF6FF;

    --clr-links: #ffffff;
    --clr-links-active: #55EDFF;

    --clr-btn-primary: #384BFF;
    --tag-bg-web: rgba(167, 81, 233, 0.30);
    --tab-bg-mobile: rgba(85, 237, 255, 0.30);
    --tag-bg-design: rgba(56, 75, 255, 0.30);


    /* Font Sizes */
    --fs-xl: 4rem;
    --fs-lg: 2.2rem;
    --fs-medium: 2rem;
    --fs-small: 1.5rem;
    --fs-xs: 1.2rem;

    /* Borders */
    --border: 1px solid #DBDBDB; 
  }

  *,
  *::before,
  *::after { 
    margin:0;
    padding: 0;
    box-sizing: border-box;
  } 

  html {
    font-size: 62.5%; 
  }



  ul, ol{
    list-style-type: none;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  }


  body {
    font-family: "Roboto", system-ui;
    background: url(${backgroundImage}) lightgray 50% / cover no-repeat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  } 

  #root {
    height: 100%;
  }

`;
