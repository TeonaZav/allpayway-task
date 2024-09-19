import React from "react";
import { SNavList, SNavLink } from "./Navlist.styled";

interface INavItem {
  label: string;
  to: string;
  end?: boolean;
}

const navItems: INavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Partners", to: "/partners" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : "";

const Navlist: React.FC = () => {
  return (
    <SNavList>
      {navItems.map((item) => (
        <li key={item.to}>
          <SNavLink to={item.to} end={item.end} className={getActiveClass}>
            {item.label}
          </SNavLink>
        </li>
      ))}
    </SNavList>
  );
};

export default Navlist;
