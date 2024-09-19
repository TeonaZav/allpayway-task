import { FC } from "react";
import { Link } from "react-router-dom";
import { SHompageContent, SHeading } from "./HompageContent";
import robotImage from "./../../assets/images/robot.png";
import { Button } from "../../styles/Shared";

const HomepageContent: FC = () => {
  return (
    <SHompageContent>
      <SHeading>
        Custom Product & Software Development Focused On Your Success
      </SHeading>

      <figure>
        <img src={robotImage} alt="robot illustration" />
      </figure>
      <Button $bgColor="white" as={Link} to="services">
        DEV IT
      </Button>
    </SHompageContent>
  );
};

export default HomepageContent;
