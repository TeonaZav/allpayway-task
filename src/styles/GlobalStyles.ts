import { createGlobalStyle } from "styled-components";
import mainBg1 from "./../assets/images/main-bg-1.png";
import mainBg2 from "./../assets/images/main-bg-2.png";

export const backgroundImages: {
  [key: string]: { desktop: string; mobile: string };
} = {
  "/": {
    desktop: mainBg1,
    mobile: mainBg2,
  },
  "/services": {
    desktop: mainBg1,
    mobile: mainBg2,
  },
  "/projects": {
    desktop: mainBg2,
    mobile: mainBg2,
  },
  "/partners": {
    desktop: mainBg1,
    mobile: mainBg2,
  },
  "/about": {
    desktop: mainBg1,
    mobile: mainBg2,
  },
  "/contact": {
    desktop: mainBg1,
    mobile: mainBg2,
  },
};

export const GlobalStyle = createGlobalStyle<{ pathname: string }>` 

  :root {
    /* Colors */
    --clr-white: #ffffff;
    --clr-bg-primary: #ffffff;

    --clr-text-primary: #FBFBFB;
    --clr-text-secondary: #000;
    --clr-text-tertiary: #FBF6FF;

    --clr-links: #ffffff;
    --clr-links-active: #55EDFF;

    --clr-btn-primary: #384BFF;
    --clr-bg-card: #FBFBFB;
    --tag-bg-web: rgba(167, 81, 233, 0.30);
    --tab-bg-mobile: rgba(85, 237, 255, 0.30);
    --tag-bg-design: rgba(56, 75, 255, 0.30);


    /* Font Sizes */
    --fs-xl: 4rem;
    --fs-lg: 2.2rem;
    --fs-medium: 2rem;
    --fs-small: 1.5rem;
    --fs-xs: 1.2rem;

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
    
    background: ${(props) =>
      `url(${
        backgroundImages[props.pathname]?.mobile || "none"
      }) lightgray 50% / cover no-repeat`};
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    scroll-behavior: smooth;

    @media (min-width: 1440px) {
      background: ${(props) =>
        `url(${
          backgroundImages[props.pathname]?.desktop || "none"
        }) lightgray 50% / cover no-repeat`};
    }
  }

  #root {
    height: 100%;
  }
  
    button, a{
  font-family: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  }
`;
