import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SubFilter } from "../../Data/SubFilter";
import axios from "axios";

export default function SubBookCard({ carddata }) {
  const location = useLocation();
  const subject = SubFilter.find((category) => category.path === location.pathname)?.subject;
  const initialBooks = SubFilter.find((category) => category.path === location.pathname)?.books;
  const [books, setBooks] = useState(initialBooks);
  const [showAdminFeatures, setShowAdminFeatures] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user details
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

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === "£") {
        setShowAdminFeatures((prev) => !prev); // Toggle admin features visibility
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Function to delete a specific book
  const deleteBook = async (bookId) => {
    const url = `http://localhost:9999/${subject}/${bookId}`;
    try {
      const response = await fetch(url, { method: "DELETE" });
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== bookId));
        console.log("Book deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting the book:", error);
    }
  };

  const postBookToCart = async (book) => {
    const url = `http://localhost:9999/${userId}/orders`;
    try {
      const response = await axios.post(
        url,
        book,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(`Your book "${book.name}" was added successfully!`);
    } catch (error) {
      console.error("Error posting book:", error.response?.data || error.message);
      alert("Failed to add the book to the cart. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl transform transition-all hover:shadow-lg hover:scale-105 max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto">
      {/* Book Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={carddata.imageUrl}
          alt="Book cover"
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
      </div>

      {/* Book Details */}
      <div className="mt-4 flex flex-col">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">{carddata.name}</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Class: <span className="text-blue-600 font-medium">{carddata.classname}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Publication: <span className="text-green-600 font-medium">{carddata.publication}</span>
        </p>
        <p className="text-sm sm:text-base text-gray-700 font-semibold mt-2">
          Price: <span className="text-blue-700">₹{carddata.price}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-700 font-light opacity-80 mt-1">
          Details: <span>{carddata.details}</span>
        </p>
      </div>

      {/* Admin Features */}
      {showAdminFeatures && (
        <div className="mt-4">
          <button
            onClick={() => deleteBook(carddata.id)}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Delete Book
          </button>
        </div>
      )}

      {/* Add to Cart Button */}
     
        
          <button
            onClick={() => postBookToCart(carddata)}
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add To Cart
          </button>
      

    </div>
  );
}
