import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import ProductItem from "./Components/ProductItem";

import NavBar from "./Components/Navbar";

function RouteConfig() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/product/:id" component={ProductItem} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouteConfig;
