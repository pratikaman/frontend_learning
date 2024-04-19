import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContext from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AppContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext>

  // </React.StrictMode>,
);
