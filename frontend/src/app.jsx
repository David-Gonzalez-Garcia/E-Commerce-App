import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((p) => p._id !== product._id);
    setCart(newCart);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/users">Create User</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Welcome to our E-commerce Platform!</h1>
          </Route>

          <Route exact path="/products">
            <ProductList products={products} handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/products/new">
            <ProductForm />
          </Route>

          <Route exact path="/products/:id">
            <ProductDetail products={products} handleAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>

          <Route exact path="/users">
            <UserForm />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
