import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App.tsx";
import HomePage from "./pages/homePage/homePage.tsx";
import ShopPage from "./pages/shop/shopPage.tsx";
import Layout from "./layouts/Layout.tsx";
import SecondLayout from "./layouts/SecondLayout.tsx";
import ProductPage from "./pages/shop/product/ProductPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.tsx";

/* Clerk things*/
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        {/*so com header e footer*/}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          {/* header, footer e titleBanner e quality Banner */}
          <Route
            path="/shop"
            element={
              <SecondLayout>
                <ShopPage />
              </SecondLayout>
            }
          />
          <Route
            path="/1"
            element={
              <SecondLayout>
                <App />
              </SecondLayout>
            }
          />
          <Route
            path="/shop/:slug"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />{" "}
          <Route
            path="/contact"
            element={
              <SecondLayout>
                <ContactPage />
              </SecondLayout>
            }
          />
          <Route
            path="/checkout"
            element={
              <SecondLayout>
                <CheckoutPage />
              </SecondLayout>
            }
          />
        </Routes>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);
