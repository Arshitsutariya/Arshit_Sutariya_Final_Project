/* ./pages/ShoppingCart.js */
import React from 'react';
import '../css/ShoppingCart.css';
import { useCart } from '../CartContext';

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate subtotal, tax, and total amounts
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.13;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="main-div">
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>

              <div className="item-buttons">
                <div className="quantity-buttons">
                  {/* Increase quantity */}
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <span>{item.quantity}</span>
                  {/* Decrease quantity with check to ensure it doesn't go below 1 */}
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                {/* Remove item from cart */}
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary">
          <h2>Summary</h2>
          {cart.length > 0 ? (
            <>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax (13%): ${tax.toFixed(2)}</p>
              <p>Total: ${total.toFixed(2)}</p>
              {/* Finalize purchase action */}
              <button className="finalize-button" onClick={() => alert('Purchase finalized!')}>
                Checkout
              </button>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
