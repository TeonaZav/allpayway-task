import Navlist from "../navigation/Navlist/Navlist";
import { SHeader, SLogo, SDesktopNav } from "./Header.styled";
import { Container } from "../../styles/Shared";
import { Logo } from "../../assets/icons";
import MobileNav from "../navigation/MobileNav/MobileNav";

const Header: React.FC = () => {
  return (
    <SHeader>
      <Container>
        <SLogo>
          <Logo />
        </SLogo>
        <SDesktopNav>
          <Navlist />
        </SDesktopNav>
        <MobileNav />
      </Container>
    </SHeader>
  );
};

export default Header;
