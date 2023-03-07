import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <GoogleOAuthProvider clientId="660793536075-ibohhn3d1r5glru2039or6omdg4tus50.apps.googleusercontent.com">
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </CookiesProvider>
);
