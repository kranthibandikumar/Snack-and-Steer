/** @format */
import React, { useState } from "react";
import "./FoodPage.css";
import Navbar from "../Navbar/Navbar";
import TestingFooter from "../../pages/TestingFooter";

// Sample food items with images
const foodItems = [
  { id: 1, name: "Burger", price: 100, image: "burger.jpg" },
  { id: 2, name: "Pizza", price: 200, image: "pizza.jpg" },
  { id: 3, name: "Soda", price: 50, image: "soda.jpg" },
  { id: 4, name: "Fries", price: 70, image: "fries.jpg" },
];

const FoodPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (food) => {
    setCart([...cart, food]);
    setTotalPrice(totalPrice + food.price);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Order placed successfully! Total amount: ₹${totalPrice}`);
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <>
    <Navbar/>
    <div className="food-page">
      <h2>Select Your Food</h2>
      <div className="food-grid">
        {foodItems.map((food) => (
          <div key={food.id} className="food-card">
            <img src={require(`./foodimg/{food.image}`)} alt={food.name} className="food-image" />
            <h4>{food.name}</h4>
            <p>Price: ₹{food.price}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p>Total Price: ₹{totalPrice}</p>
        <button onClick={placeOrder} disabled={cart.length === 0}>
          Place Order
        </button>
      </div>
    </div>
    <TestingFooter/>
        </>
  );
};

export default FoodPage;
