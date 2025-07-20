import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

function Favourite() {
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const matchedProperties = data.filter((property) =>
      savedFavourites.includes(property.id)
    );
    setFavouriteProperties(matchedProperties);
  }, []);

  return (
    <div className="p-4 mx-5 bg-blue-200 dark:bg-gray-700 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Favourites</h1>
      {favouriteProperties.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-200">No favourite properties added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favouriteProperties.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow-md bg-teal-100 dark:bg-gray-500 dark:text-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-200">{item.location}</p>
              <p className="text-teal-600 dark:text-cyan-200 font-bold">₹ {item.price.toLocaleString()}</p>
              <p className="text-sm">{item.description}</p>
              <button
                onClick={() => navigate(`/property/${item.id}`)}
                className="mt-3 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition duration-200 mx-auto block"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
