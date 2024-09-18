import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./../../assets/loop.json";
import { SCenteredBox } from "./Loading.styled";

const Loading: React.FC = () => {
  return (
    <SCenteredBox>
      <Lottie animationData={loadingAnimation} />
    </SCenteredBox>
  );
};

export default Loading;
