// ./component/Product.js
import React, { useState } from "react";
import { useCart } from "../CartContext";
import "../css/Product.css";

function Product({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  // Ensure the quantity is not negative
  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(0, parseInt(e.target.value, 10));
    setQuantity(newQuantity);
  };

  // Add the product to the cart if quantity is greater than 0
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <div className="name-price">
          <h3>{product.name}</h3>
          <h3>${product.price}</h3>
        </div>
        <p>{product.description}</p>
        <div className="quantity-control">
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min={0}
            step={1}
          />
        </div>
        <button
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={quantity <= 0} 
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
