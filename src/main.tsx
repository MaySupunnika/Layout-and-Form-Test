import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { Provider as StateProvider } from "react-redux";
import store from "./store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider store={store}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
