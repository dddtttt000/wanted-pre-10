import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Route from "./components/Route";
import Root from "./components/Root";
import About from "./components/About";
import Router from "./components/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
