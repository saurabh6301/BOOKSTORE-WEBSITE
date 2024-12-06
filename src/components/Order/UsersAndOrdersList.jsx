import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersAndOrdersList = () => {
  const [orders, setOrders] = useState([]); // State to hold flattened user orders
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all users and their orders
  const fetchOrdersData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9999/register"); // Adjust API endpoint if needed
      // Flatten the orders data
      const flattenedOrders = response.data.flatMap((user) =>
        user.orderDetails.map((order) => ({
          userId: user.userId,
          username: user.username,
          phoneNumber: user.phoneNumber,
          address: user.address,
          joinedAt: new Date(user.createdAt).toLocaleDateString(),
          orderId: order.id,
          bookName: order.name,
          price: order.price,
          publication: order.publication || "N/A", // Assuming 'publication' is part of the order
        }))
      );
      setOrders(flattenedOrders);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="loader animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-red-100 text-red-700 border border-red-300 rounded p-4">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600 text-center mb-6">
        Users and Their Orders
      </h1>
      <div className="overflow-hidden border border-gray-300 rounded-lg bg-white">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-blue-600 text-white text-sm uppercase font-bold">
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Joined At</th>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Book Name</th>
              <th className="px-4 py-2">Publication</th>
              <th className="px-4 py-2">Price</th>
              
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                key={`${order.userId}-${order.orderId}`}
                className={`${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-2">{order.username}</td>
                <td className="px-4 py-2">{order.phoneNumber}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.joinedAt}</td>
                <td className="px-4 py-2">{order.orderId}</td>
                <td className="px-4 py-2">{order.bookName}</td>
                <td className="px-4 py-2">{order.publication}</td>
                <td className="px-4 py-2">${order.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersAndOrdersList;
