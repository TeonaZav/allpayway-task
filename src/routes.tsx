import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout, Loading } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Partners = lazy(() => import("./pages/Partners"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="projects"
        element={
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="partners"
        element={
          <Suspense fallback={<Loading />}>
            <Partners />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        }
      />
    </Route>
  )
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
