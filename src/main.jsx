import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AuthProvider from "./Context/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import Router from "./Router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
