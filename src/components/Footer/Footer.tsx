import { FC, ReactNode } from "react";
import { Container } from "../../styles/Shared";
import {
  SFooter,
  SFooterCt2,
  STermsLinkCt,
  SCopyright,
  SLink,
  SSocialLinks,
  SSocialLink,
} from "./Footer.styled";
import {
  FbIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../../assets/icons";

interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "#", icon: <FbIcon />, label: "Facebook" },
  { href: "#", icon: <InstagramIcon />, label: "Instagram" },
  { href: "#", icon: <TwitterIcon />, label: "Twitter" },
  { href: "#", icon: <LinkedinIcon />, label: "LinkedIn" },
];

const Footer: FC = () => {
  return (
    <SFooter>
      <Container>
        <STermsLinkCt>
          <li>
            <SLink to="/">Privacy policy</SLink>
          </li>
          <li>
            <SLink to="/">Cookie & privacy preferences</SLink>
          </li>
        </STermsLinkCt>
        <SFooterCt2>
          <SSocialLinks>
            {socialLinks.map((link) => (
              <SSocialLink
                key={link.label}
                href={link.href}
                aria-label={link.label}
              >
                {link.icon}
              </SSocialLink>
            ))}
          </SSocialLinks>
          <SCopyright>&#169; Copyright Devspace</SCopyright>
        </SFooterCt2>
      </Container>
    </SFooter>
  );
};

export default Footer;
