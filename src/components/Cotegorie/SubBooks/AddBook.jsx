import { useLocation } from "react-router-dom";
import { SubFilter } from "../../Data/SubFilter";
import SubBookCard from "./SubBookCard";
import { useReducer, useState, useEffect } from "react";

const AddBook = () => {
    const location = useLocation();
    const [book, setBook] = useState({
        name: "",
        price: "",
        publication: "",
        classname: "",
        imageUrl: "",
        details: "",
        href: "",
        id: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Updated Book Data:", book);


        const subject = SubFilter.find((category) => category.path === location.pathname)?.subject;

        if (!subject) {
            console.error("Subject not found");
            return;
        }

        try {
            const response = await fetch(`http://localhost:9999/${subject}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Book added successfully:", result);
                setBook({
                    name: "",
                    price: "",
                    publication: "",
                    classname: "",
                    imageUrl: "",
                    details: "",
                    href: "",
                    id: ""
                });
                window.location.reload();
            } else {
                console.error("Error adding book:", response.statusText);
            }
        } catch (error) {
            console.error("Error in submission:", error);
        }
    };

    return (
        <>
            <h1 className="text-4xl font-medium text-black mb-4 text-center">Add New Book</h1>
            <form
                onSubmit={handleSubmit}
                className="w-1/2 mx-auto bg-gray-50 rounded-lg shadow-lg p-10"
            >
                <label className="block mb-4 text-gray-700">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={book.name}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={book.price}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Publication:
                    <input
                        type="text"
                        name="publication"
                        value={book.publication}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Class:
                    <input
                        type="text"
                        name="classname"
                        value={book.classname}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Href:
                    <input
                        type="text"
                        name="href"
                        value={book.href}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    BookId:
                    <input
                        type="text"
                        name="id"
                        value={book.id}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Image URL:
                    <input
                        type="text"
                        name="imageUrl"
                        value={book.imageUrl}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                </label>
                <label className="block mb-4 text-gray-700">
                    Details:
                    <textarea
                        name="details"
                        value={book.details}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md resize-y"
                    />
                </label>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddBook;
