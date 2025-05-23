import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import HomePage from "./pages/homePage/homePage.tsx";
import ShopPage from "./pages/shop/shopPage.tsx";
import Layout from "./layouts/Layout.tsx";
import SecondLayout from "./layouts/SecondLayout.tsx";
import ProductPage from "./pages/shop/product/ProductPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.tsx";
import AuthRoutes from "./routes/AuthRoutes.tsx";
import CartPage from "./pages/cart/CartPage.tsx";

/* Clerk things*/
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Provider store={store}>
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
              path="/cart"
              element={
                <SecondLayout>
                  <CartPage />
                </SecondLayout>
              }
            />
            {/* Auth Routes */}
            <Route element={<AuthRoutes />}>
              <Route
                path="/checkout"
                element={
                  <SecondLayout>
                    <CheckoutPage />
                  </SecondLayout>
                }
              />
            </Route>
            {/* Login page */}
          </Routes>
        </Provider>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);
