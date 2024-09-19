declare module "react-slick" {
    import { Component } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      nextArrow?: JSX.Element;
      prevArrow?: JSX.Element;
      responsive?: Array<{
        breakpoint: number;
        settings: {
          slidesToShow: number;
          slidesToScroll: number;
        };
      }>;
    }
  
    export default class Slider extends Component<Settings> {}
  }