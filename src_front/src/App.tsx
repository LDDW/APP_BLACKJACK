import React from "react";
import logo from "./logo.svg";
import "./components/front/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";


// Importing the Bootstrap 5 CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
