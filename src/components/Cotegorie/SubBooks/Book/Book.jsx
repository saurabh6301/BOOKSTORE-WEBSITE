import { useEffect, useState } from 'react';
import { Button, Radio, RadioGroup } from '@headlessui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { SubFilter } from '../Bookdata/SubFilter';

export default function Book() {
  const location = useLocation();
  const filteredBooks = SubFilter.find((road) => location.pathname.includes(road.path))
    ?.books
    ?.filter((item) => location.pathname.endsWith(item.class));

  return (
    <div className="bg-white">
      <div className="pt-6">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBooks?.map((selectedBook, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between mb-10"
            >
              {/* Image gallery */}
              <div className="flex flex-col lg:w-1/2">
                <div className="flex justify-start md:justify-center rounded-lg w-full/2 h-80">
                  {selectedBook?.images?.[0] && (
                    <img
                      alt={selectedBook.images[0].alt}
                      src={selectedBook.images[0].src}
                      className="h-9/10 w-3/5"
                    />
                  )}
                </div>
                <div className="flex flex-row  justify-start md:justify-center mt-4 space-x-10">
                  {selectedBook?.images?.map((image, idx) => (
                    <div key={idx} className="w-20 h-30 mx-2">
                      <img
                        alt={image.alt}
                        src={image.src}
                        className=" w-full h-full rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="lg:w-1/2 lg:pl-8">
                <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900">
                  {selectedBook?.name}
                </h1>
                <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900 opacity-60">
                  {selectedBook?.publication}
                </h1>

                {/* Options */}
                <div className="mt-5">
                  <h2 className="sr-only">Product information</h2>
                  <div className="flex items-center text-lg lg:text-xl text-gray-900 mt-3">
                    <p className="font-semibold">₹{selectedBook?.price}</p>
                    <p className="opacity-50 line-through ml-2">₹{selectedBook?.originalPrice}</p>
                    <p className="text-green-600 font-semibold ml-2">5% Off</p>
                  </div>
                  <form className="mt-3">
                    <button className="bg-blue-900 text-white px-4 py-2 text-sm mt-3 rounded-md hover:bg-blue-800">
                      ADD TO CART
                    </button>
                  </form>
                </div>

                <div className="py-10 lg:border-t lg:border-gray-200 lg:pt-3">
                  {/* Description and details */}
                  <div className="mt-5">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>
                    <p className="text-sm text-gray-600">{selectedBook?.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
