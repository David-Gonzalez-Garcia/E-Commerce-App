import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Logout from "./components/Logout";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/add-product" component={ProductForm} />
        <Route path="/edit-product/:id" component={ProductForm} />
        <Route path="/add-user" component={UserForm} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
