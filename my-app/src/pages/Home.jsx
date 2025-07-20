import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import data from "../data.json"
import { useNavigate } from "react-router-dom";

function Home() {
  const [properties, setProperties] = useState([]);
  const [favourites, setFavourites] = useState(() => {
  const stored = localStorage.getItem("favourites");
  return stored ? JSON.parse(stored) : [];
})
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    bedrooms: "",
  });
   const navigate=useNavigate()
  useEffect(() => {
    setProperties(data); 
    setFiltered(data)
  }, [])
   const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const resetFilters = () => {
    setFilters({
      type: "",
      bedrooms: "",
      sort: "",
    });
    setFiltered(properties);
  }

 useEffect(() => {
     let result = [...properties];

    if (filters.type) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.bedrooms) {
      result = result.filter((p) => p.bhk.toString() === filters.bedrooms)
    }

    if (filters.sort === "min-max") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "max-min") {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result)
  }, [filters, properties])
  const toggleFavourite = (id) => {
  let updated = [];

  if (favourites.includes(id)) {
    updated = favourites.filter((favId) => favId !== id);
  } else {
    updated = [...favourites, id];
  }

  setFavourites(updated);
  localStorage.setItem("favourites", JSON.stringify(updated));
};
  return (
    
    <>
       <div 
       className="p-4  bg-blue-300 dark:bg-gray-600 md:flex  md:flex-row items-center gap-4 
       justify-between mx-5 rounded shadow grid grid-cols-2 border-t border-b top-20 z-50 sticky">
  
         <button
                  onClick={resetFilters}
                  className="mt-3 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                 Reset Filter
                </button>

        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">Sort by Price</option>
          <option value="min-max">Low to High</option>
          <option value="max-min">High to Low</option>
        </select>

  
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Bungalow">Bungalow</option>
        </select>

        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          className="px-3 py-2 rounded border"
        >
          <option value="">All BHK</option>
          <option value="1">1BHK</option>
          <option value="2">2BHK</option>
          <option value="3">3BHK</option>
        </select>
    
    </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mx-5 shadow-sm bg-blue-200 dark:bg-gray-700">
      {filtered.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow-md bg-teal-100 dark:bg-gray-500  dark:text-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex md:flex-row md:justify-between sm:flex-col">
             <h2 className="text-xl font-semibold">{item.title}</h2>
              <button
                 onClick={() => toggleFavourite(item.id)}
                 className="mt-2 text-red-500 text-2xl hover:scale-110 transition-transform duration-200"
                 aria-label="Toggle Favourite"
              >
                {favourites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
             </button>
          </div>
          <p className="text-gray-600  dark:text-gray-200">{item.location}</p>
          <p className="text-teal-600  dark:text-cyan-200 font-bold">₹ {item.price.toLocaleString()}</p>
          <p className="text-sm">{item.description}</p>
          <button
                  onClick={()=>navigate(`/property/${item.id}`)}
                  className="mt-3 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition duration-200 mx-auto block"
                >
                 View Details
                </button>
              
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;

