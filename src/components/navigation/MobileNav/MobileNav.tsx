import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Navlist from "../Navlist/Navlist";
import { SMobileNav, SDrawerContent, SBurgerButton } from "./MobileNav.styled";
import { BurgerIcon } from "../../../assets/icons";

const MobileNav: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SMobileNav>
      <SBurgerButton onClick={onOpen}>
        <BurgerIcon />
      </SBurgerButton>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay onClick={onClose} />
        <SDrawerContent>
          <DrawerBody>
            <Navlist />
          </DrawerBody>
        </SDrawerContent>
      </Drawer>
    </SMobileNav>
  );
};

export default MobileNav;
