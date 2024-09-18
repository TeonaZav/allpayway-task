import { FC } from "react";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SLayout, SMain } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "../../styles/Shared";
import { fadeInAnimation } from "../../utils/animationConfig";
import { GlobalStyle } from "../../styles/GlobalStyles";

const Layout: FC = () => {
  const location = useLocation();

  return (
    <SLayout>
      <GlobalStyle pathname={location.pathname} />
      <ScrollRestoration />
      <Header />
      <SMain>
        <Container>
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...fadeInAnimation}>
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
