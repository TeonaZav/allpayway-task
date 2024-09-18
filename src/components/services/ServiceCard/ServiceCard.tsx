import React from "react";
import {
  SCard,
  SCardHeader,
  SCardBody,
  SIconWrapper,
  SCardNumber,
} from "./ServiceCard.styled";
import * as Icons from "./../../../assets/icons";
import { ArrowRightIcon } from "./../../../assets/icons";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
  index,
}) => {
  const IconComponent = Icons[iconName];

  return (
    <SCard>
      <SCardHeader>
        <SIconWrapper>{IconComponent && <IconComponent />}</SIconWrapper>
        <SCardNumber>{index.toString().padStart(2, "0")}</SCardNumber>
      </SCardHeader>

      <SCardBody>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">
          <ArrowRightIcon />
        </a>
      </SCardBody>
    </SCard>
  );
};

export default ServiceCard;
