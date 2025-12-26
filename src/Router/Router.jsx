import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import AboutSection from "../Pages/About";
import ContactSection from "../Pages/Send";
import SkillSection from "../Components/SkilledSection";
import MyProjects from "../Pages/MyProjects";
import Forbidden from "../Pages/Forbidden";
import DetailsPage from "../Pages/detalilsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutSection,
      },
      {
        path: "contact",
        Component: ContactSection,
      },
      {
        path: "skilled",
        Component: SkillSection,
      },
      {
        path: "my-project",
        Component: MyProjects,
      },
      {
        path: "details-page/:id",
        Component: DetailsPage,
      },
    ],
  },
  {
    path: '*',
    Component: Forbidden
  }
]);

export default Router;
