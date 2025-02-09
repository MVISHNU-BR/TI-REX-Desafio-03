import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import HomePage from "./pages/homePage/homePage.tsx";
import ShopPage from "./pages/shop/shopPage.tsx";
import Layout from "./layouts/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/1" element={<App />} />
        </Routes>
      </Layout>
    </StrictMode>
  </BrowserRouter>
);
