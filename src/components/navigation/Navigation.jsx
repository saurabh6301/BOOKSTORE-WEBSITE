import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Left Section - Bookstore Text */}
              <div className="flex items-center">
                <h1 className="text-yellow-100 font-extralight text-2xl">BOOKSTORE</h1>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Cart Icon */}
                <Link to="/Users">
                  <button
                    type="button"
                    className="relative p-1 text-red-700 hover:text-red-500 bg-yellow-200 rounded-md"
                  >
                    <ShoppingCartIcon />
                  </button>
                </Link>

                {/* Three-Dot Menu for Mobile */}
                <div className="relative lg:hidden">
                  <button
                    className="bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none hover:bg-gray-900"
                    aria-haspopup="true"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    &#x22EE; {/* Vertical Three-Dot Icon */}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                      <Link
                        to="/Register"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Sign up
                      </Link>
                    </div>
                  )}
                </div>

                {/* Signup Button (Larger Devices) */}
                <Link
                  to="/Register"
                  className="hidden lg:block text-gray-900 px-3 py-2 bg-yellow-100 rounded-md transition duration-200"
                >
                  Sign up
                </Link>

                {/* Checkout Button (Larger Devices) */}
                
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
