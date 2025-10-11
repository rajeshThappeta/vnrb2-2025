import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContext from "./contexts/CounterContext.jsx";
import UserContext from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* Providing CounterContext to Root component */}
    <CounterContext>
      <UserContext>
        <App />
      </UserContext>
    </CounterContext>
  </>
);
