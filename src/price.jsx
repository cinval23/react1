// src/Price.js
import React from "react";
import product from "./product";

function Price() {
  return <p>Price: ${product.price.toFixed(2)}</p>;
}

export default Price;