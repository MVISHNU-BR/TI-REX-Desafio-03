import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App.tsx";
import HomePage from "./pages/homePage/homePage.tsx";
import ShopPage from "./pages/shop/shopPage.tsx";
import Layout from "./layouts/Layout.tsx";

/* Clerk things*/
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/1" element={<App />} />
          </Routes>
        </Layout>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);
