import { FC } from "react";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SLayout, SMain, SPathname } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "../../styles/Shared";
import { fadeInAnimation } from "../../utils/animationConfig";
import { GlobalStyle } from "../../styles/GlobalStyles";

const routeTitles: { [key: string]: string } = {
  "/": "Home",
  "/services": "Services",
  "/projects": "Our Projects",
  "/partners": "Our Partners",
  "/about": "About Us",
  "/contact": "Contact Us",
};

const Layout: FC = () => {
  const location = useLocation();

  const pageTitle =
    routeTitles[location.pathname] ||
    location.pathname.replace("/", "").replace("-", " ");
  return (
    <SLayout>
      <GlobalStyle pathname={location.pathname} />
      <ScrollRestoration />
      <Header />
      <SMain>
        <Container>
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...fadeInAnimation}>
              <SPathname>{`# ${pageTitle}`}</SPathname>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Container>
      </SMain>
      <Footer />
    </SLayout>
  );
};

export default Layout;
