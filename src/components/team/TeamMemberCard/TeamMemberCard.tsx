import React, { useState } from "react";
import { STeamCard, STeamImage, SCardContent } from "./TeamMemberCard.styled";
import TeamMemberImage from "./../../../assets/images/team-member.png";
import { ITeamMember } from "../../../services/types";

const TeamMemberCard: React.FC<ITeamMember> = ({
  firstname,
  lastname,
  position,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <STeamCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <STeamImage src={TeamMemberImage} alt={`${firstname} ${lastname}`} />
      <SCardContent $isHovered={isHovered}>
        <h3>{`${firstname} ${lastname}`}</h3>
        <p>{position}</p>
      </SCardContent>
    </STeamCard>
  );
};

export default TeamMemberCard;
