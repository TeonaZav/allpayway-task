import React from "react";
import { Section, SectionHeading, Text } from "./../../styles/Shared";
import { SIcon } from "./TextBox.styled";

interface TextBoxProps {
  heading: string;
  hasIcon?: boolean;
  content: string[];
}

const TextBox: React.FC<TextBoxProps> = ({ heading, hasIcon, content }) => {
  return (
    <Section>
      <SectionHeading>
        {hasIcon && <SIcon />}
        {heading}
      </SectionHeading>
      {content.map((paragraph, index) => (
        <Text key={index}>{paragraph}</Text>
      ))}
    </Section>
  );
};

export default TextBox;
