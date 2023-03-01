import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages";

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Home />
    </div>
  );
}

export default App;
