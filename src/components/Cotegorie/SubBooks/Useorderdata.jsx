import React, { useState } from "react";
import axios from "axios";

const UserOrderData = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Login the user
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/login", user, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data); // Response from the server
      setLoggedInUser(user.username); // Set logged-in user

      // If login is successful, post order data for the logged-in user
      const initialOrder = {
        bookName: "Default Book", // Replace with real data
        quantity: 1,
        user: {
          username: user.username, // Associate with the logged-in user
        },
      };
      await postBookToCart(initialOrder);
    } catch (error) {
      setMessage(error.response?.data || "Login failed.");
    }
  };

  // Post order data
  const postBookToCart = async (book) => {
    const url = "http://localhost:9999/orderdetails";

    try {
      const response = await axios.post(url, book, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Book added to cart successfully:", response.data);
      alert(`Your book order with ID ${response.data.id} was added successfully!`);
    } catch (error) {
      console.error("Error posting book:", error.response ? error.response.data : error.message);
      alert("Failed to add the book to the cart. Please try again.");
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User Login & Order</h1>

      {/* Login Form */}
      <form onSubmit={loginUser} className="mb-4 space-y-2">
        <h2 className="text-xl font-semibold">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      {/* Display Message */}
      {message && <pre className="mt-4 text-center text-sm text-gray-700">{message}</pre>}
    </div>
  );
};

export default UserOrderData;
