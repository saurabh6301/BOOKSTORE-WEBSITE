import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const Orderpage = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false); // State to toggle QR code display

  // Fetch user data from API
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:9999/register`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const userId = user?.[0]?.userId;
  const username = user?.[0]?.username;

  // Fetch order details based on userId
  const fetchOrderDetails = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(`http://localhost:9999/${userId}/orders`);
      setOrderDetails(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error("Error fetching order details:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchOrderDetails();
    }
  }, [userId]);

  // Calculate total order amount
  const calculateTotal = (orders) => {
    const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);
    setTotal(totalPrice);
  };

  // Delete an order
  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:9999/orderdetails/${orderId}`);
      if (response.status === 200) {
        const updatedOrders = orderDetails.filter((order) => order.id !== orderId);
        setOrderDetails(updatedOrders);
        calculateTotal(updatedOrders);
      }
    } catch (error) {
      console.error("Error deleting order:", error.response?.data || error.message);
    }
  };

  // Handle payment by showing QR code
  const handlePayment = () => {
    if (total === 0) {
      alert("Your cart is empty. Please add items to proceed with payment.");
      return;
    }

    setShowQRCode(true);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Order Details</h1>

      {user && (
        <h2 className="text-xl font-medium mb-6">
          Welcome, <span className="font-semibold">{username}</span>!
        </h2>
      )}

      {orderDetails && orderDetails.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Order ID</th>
                <th className="text-left px-4 py-3 font-medium">Book Name</th>
                <th className="text-left px-4 py-3 font-medium">Publication</th>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Price (₹)</th>
                <th className="text-center px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.publication}</td>
                  <td className="px-4 py-2">{order.classname}</td>
                  <td className="px-4 py-2">₹{order.price}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <DeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="px-4 py-3 text-right font-medium">
                  Total:
                </td>
                <td className="px-4 py-3 font-bold">₹{total}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={handlePayment}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Proceed to Payment
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No order details found.</p>
      )}

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Scan the QR Code</h2>
            <img src="Qr_code.jpg" alt="QR Code" className="w-64 h-64 mx-auto" />
            <h2 className="text-sm font-bold mb-2">Saurabh Pandey</h2>
            <button
              onClick={() => setShowQRCode(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orderpage;
