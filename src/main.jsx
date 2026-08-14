import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

let root = createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
);
