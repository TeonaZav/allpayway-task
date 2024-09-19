import { FC } from "react";
import { Link } from "react-router-dom";
import {
  SHompageContent,
  SHeading,
  SButtonStart,
  SButtonStartMobile,
} from "./HompageContent";
import robotImage from "./../../assets/images/robot.png";

const HomepageContent: FC = () => {
  return (
    <SHompageContent>
      <div>
        <SHeading>
          Custom Product & Software Development Focused On Your Success
        </SHeading>
        <SButtonStart $bgColor="white" as={Link} to="services">
          DEV IT
        </SButtonStart>
      </div>

      <figure>
        <img src={robotImage} alt="robot illustration" />
      </figure>
      <SButtonStartMobile $bgColor="white" as={Link} to="services">
        DEV IT
      </SButtonStartMobile>
    </SHompageContent>
  );
};

export default HomepageContent;
