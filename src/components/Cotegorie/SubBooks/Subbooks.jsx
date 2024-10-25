'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

import SubBookCard from './SubBookCard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { SubFilter } from './Bookdata/SubFilter';
import Book from './Book/Book';

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
      { value: 'Bala Ji', label: 'Bala ji', checked: false },
      { value: 'Kumar Mittal', label: 'Kumar Mittal', checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Subbooks() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState({ Class: '', Publication: '' });
  const location = useLocation();

  const filteredBooks = SubFilter.find((road) => road.path === location.pathname)?.books?.filter((item) => {
    return (
      item.class.includes(filter.Class) &&
      item.publication.includes(filter.Publication)
    );
  }) || []; // Fallback to an empty array if undefined

  const handleReset = () => {
    setFilter({ Class: '', Publication: '' });
    filters.forEach((section) => {
      section.options.forEach((option, optionIdx) => {
        const elem = document.getElementById(`filter-${section.id}-${optionIdx}`);
        if (elem) elem.checked = false;
      });
    });
  };

  const currentPaths = SubFilter.map((item) => item.path);

  // Add an effect to handle mobile filter state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint is 768px
        setMobileFiltersOpen(false); // Hide mobile filters on medium screens and above
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {currentPaths.includes(location.pathname) ? (
        <div className="bg-white">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500"
              >
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Filters</span>
              </button>
            </div>

            {/* Mobile Filter Dialog */}
            <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)}>
              <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
              <DialogPanel className="fixed inset-y-0 right-0 w-full/2 max-w-sm overflow-y-auto bg-white p-4">
                <button type="button" onClick={() => setMobileFiltersOpen(false)} className="absolute top-4 right-4">
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
                <form className="space-y-4">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 pb-4">
                      <h3>
                        <DisclosureButton className="flex justify-between w-full text-left text-sm font-medium text-gray-900">
                          {section.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5" />
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="radio"
                              className="h-4 w-4 text-indigo-600"
                              onChange={(e) => {
                                setFilter((prev) => ({ ...prev, [section.id]: e.target.value }));
                              }}
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
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
                    className="mt-4 w-full bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </form>
              </DialogPanel>
            </Dialog>

            {/* Layout with Filter on Left */}
            <div className="flex space-x-8 mt-6">
              {/* Filter Box */}
              <aside className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-md hidden sm:block">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
                <form className="space-y-4">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 pb-4">
                      <h3>
                        <DisclosureButton className="flex justify-between w-full text-left text-sm font-medium text-gray-900">
                          {section.name}
                          <ChevronDownIcon className="ml-2 h-5 w-5" />
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="radio"
                              className="h-4 w-4 text-indigo-600"
                              onChange={(e) => {
                                setFilter((prev) => ({ ...prev, [section.id]: e.target.value }));
                              }}
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
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
                    className="mt-4 w-full bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </form>
              </aside>

              {/* Product Grid */}
              <section className="w-3/4">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  pb-24 pt-6">
                  {Array.isArray(filteredBooks) &&
                    filteredBooks.map((book) => (
                      <div key={book.id}>
                        <Link to={`/${book.href}`}>
                          <SubBookCard carddata={book} />
                        </Link>
                      </div>
                    ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      ) : (
        <Book />
      )}
    </>
  );
}
