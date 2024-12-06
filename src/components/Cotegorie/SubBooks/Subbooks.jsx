'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SubBookCard from './SubBookCard';
import AddBook from './AddBook';
import { SubFilter } from '../../Data/SubFilter';
import { ShoppingCartRounded } from '@mui/icons-material';

const filters = [
  {
    id: 'Class',
    name: 'Class',
    options: [
      { value: '8th', label: '8th', checked: false },
      { value: '9th', label: '9th', checked: false },
      { value: '10th', label: '10th', checked: true },
      { value: '11th', label: '11th', checked: false },
      { value: '12th', label: '12th', checked: false },
    ],
  },
  {
    id: 'Publication',
    name: 'Publication',
    options: [
      { value: 'Rajiv', label: 'Rajiv', checked: false },
      { value: 'Vidhya', label: 'Vidhya', checked: false },
      { value: 'Arihant', label: 'Arihant', checked: true },
      { value: 'Bala Ji', label: 'Bala Ji', checked: false },
      { value: 'Kumar Mittal', label: 'Kumar Mittal', checked: false },
    ],
  },
];

export default function Subbooks() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState({ Class: '', Publication: '' });
  const location = useLocation();
  const filteredBook = SubFilter.find((road) => road.path === location.pathname);
  const [books, setBooks] = useState([]);
  const [newbooks, setNewBooks] = useState(true);
  const [showAdminFeatures, setShowAdminFeatures] = useState(false);

  // Set books when filteredBook changes
  useEffect(() => {
    setBooks(filteredBook?.books || []);
  }, [filteredBook]);

  // Filtered books based on selected filters
  const filteredBooks = books.filter((book) => {
    const matchesClass = filter.Class ? book.classname.includes(filter.Class) : true;
    const matchesPublication = filter.Publication ? book.publication.includes(filter.Publication) : true;
    return matchesClass && matchesPublication;
  });

  const handleReset = () => {
    setFilter({ Class: '', Publication: '' });
  };

  // Toggle admin features using a keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === '£') {
        setShowAdminFeatures((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      {newbooks ? (
        <div className="bg-white pt-20">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
              <h1 className="text-6xl font-bold tracking-tight text-gray-950">All Books</h1>

              {/* Admin Features */}
              {showAdminFeatures && (
                <div className="mt-4">
                  <Link to={location.pathname}>
                    <button
                      onClick={() => setNewBooks(false)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Add New Book
                    </button>
                  </Link>
                </div>
              )}
              <Link to="/Orderpage">
                <button
                  type="button"
                  className="relative p-1 text-gray-700-700 hover:text-gray-500 bg-gray-200 rounded-md"
                >
                  <ShoppingCartRounded/>
                </button>
              </Link>

              {/* Filter Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500"
              >
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Filters</span>
              </button>
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-x-8 mt-10">
              {/* Sidebar Filters */}
              <aside className="hidden lg:block lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md space-y-8 border border-gray-200">
                <form className="space-y-6">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="space-y-4">
                      <h3>
                        <DisclosureButton className="flex justify-between w-full text-left text-base font-semibold text-gray-800 hover:text-indigo-600">
                          {section.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-500 group-hover:text-indigo-600" />
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-4">
                        <div className="space-y-3">
                          {section.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-3">
                              <input
                                value={option.value}
                                id={`filter-${section.id}-${option.value}`}
                                name={section.id}
                                type="radio"
                                className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                onChange={(e) => {
                                  setFilter((prev) => ({
                                    ...prev,
                                    [section.id]: e.target.value,
                                  }));
                                }}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${option.value}`}
                                className="text-sm text-gray-700"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Reset
                  </button>
                </form>
              </aside>

              {/* Main Book Cards */}
              <section className="lg:col-span-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-6">
                {filteredBooks.map((book) => (
                  <SubBookCard key={book.id} carddata={book} />
                ))}
              </section>
            </div>

            {/* Mobile Filters Dialog */}
            <Dialog
              open={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
              <div className="fixed inset-y-0 right-0 flex max-w-md w-1/2 sm:w-1/3 bg-white shadow-lg">
                <Dialog.Panel className="flex flex-col w-full p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <form className="mt-10 space-y-10">
                    {filters.map((section) => (
                      <Disclosure key={section.id} as="div">
                        <h3>
                          <DisclosureButton className="flex justify-between w-full text-left text-sm font-medium text-gray-900">
                            {section.name}
                            <ChevronDownIcon className="ml-2 h-5 w-5" />
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-4">
                          {section.options.map((option) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                value={option.value}
                                id={`mobile-filter-${section.id}-${option.value}`}
                                name={section.id}
                                type="radio"
                                className="h-4 w-4 text-indigo-600"
                                onChange={(e) => {
                                  setFilter((prev) => ({
                                    ...prev,
                                    [section.id]: e.target.value,
                                  }));
                                }}
                              />
                              <label
                                htmlFor={`mobile-filter-${section.id}-${option.value}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Reset
                    </button>
                  </form>
                </Dialog.Panel>
              </div>
            </Dialog>
          </main>
        </div>
      ) :
        (
          <AddBook />
        )


      }
    </>
  );
}
