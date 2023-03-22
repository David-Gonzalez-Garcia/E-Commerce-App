import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  }, []);

  useEffect(() => {
    const updateCart = () => {
      fetch("/api/cart")
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    };

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const removeFromCart = (itemId) => {
    fetch(`/api/cart/${itemId}`, {
      method: "DELETE",
    }).then(() => {
      const event = new CustomEvent("cartUpdated");
      window.dispatchEvent(event);
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <h3>{item.product.name}</h3>
            <p>{item.product.description}</p>
            <p>{item.product.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
