
import { Routes, Route, Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Subject } from "./Subject";
import React, { useState } from "react";
import Subbooks from "./SubBooks/Subbooks";

export default function Cotegorie() {
    const [store, setStore] = useState(Subject)
    const [data, setData] = useState('')

    const handleChange = (e) => {
        setData(e.target.value);
    };

    let fiterOut = store.filter((currentVal) => {
        return currentVal.name.toLowerCase().includes(data);
    })
    const location = useLocation();

    return (<>
        {
            location.pathname !== '/Cotegorie' ? <Routes>
                {fiterOut.map((subject) => (
                    <Route key={`${subject.href}/*`} path={`${subject.href}/*`} element={<Subbooks  />} />))}
            </Routes> : 
            <div>
                <h1 className="text-6xl font-serif text-gray-900 sm:text-2xl text-center border-b-4 border-double border-yellow-200 bg-slate-50 mt-5">Cotegorie</h1>
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
                            </div>
                            <div>
                                <div className="flex justify-center items-center">
                                    <div className="flex bg-white rounded-lg shadow-md">
                                        <input type="text" value={data} onChange={handleChange} placeholder="Search..." className="w-full py-2 pl-10 text-sm text-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-600" />
                                        <button type="submit" className="px-4 py-2 text-sm text-white bg-gray-600 rounded-r-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                            <SearchIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                {fiterOut.map((subject) => (
                                    <ul key={subject.name}>
                                        <li>
                                            <div className="group relative py-10">
                                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                    <img alt={subject.imageAlt} src={subject.imageSrc} className="h-full w-full object-cover object-center" />
                                                </div>
                                                <h3 className="mt-6 text-sm text-gray-500">
                                                    <Link to={subject.href}>
                                                        <span className="absolute inset-0" />
                                                        {subject.name}
                                                    </Link>
                                                </h3>
                                                <p className="text-base font-semibold text-gray-900">{subject.description}</p>
                                            </div>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
    )
}
