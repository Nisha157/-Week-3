import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container">
      <div className="product-card">
        <h1>Product Quantity</h1>

        <h2>Laptop</h2>
        <p className="price">₹50,000</p>

        <div className="quantity-box">
          <button onClick={() => setQuantity(quantity - 1)}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>

        <p className="total">
          Total: ₹{quantity * 50000}
        </p>
      </div>
    </div>
  );
}

export default App;