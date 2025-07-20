import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Property() {
const [showForm,setShowForm]=useState(false)
  const { id } = useParams();
  const property = data.find((item) => item.id === Number(id));
  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowForm(false)
  }

  const handleClick=()=>{
    setShowForm(true)
  }

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:text-white rounded shadow mt-5">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

      <div className="grid md:grid-cols-2 gap-4">
       
        <div>
          <img
            src={property.image}
            alt={property.title}
            className="rounded w-full h-64 object-cover mb-2"
          />
        </div>

        <div>
          <p className="text-xl font-semibold mb-1">₹ {property.price.toLocaleString()}</p>
          <p>{property.description}</p>
          <p className="mt-2"><strong>BHK:</strong> {property.bhk}</p>
          <p><strong>Area:</strong> {property.area}</p>
          <p><strong>Amenities:</strong> {property.amenities.join(", ")}</p>

          <div className="mt-4">
            <iframe
              src={property.map.replace(" ", "+")}
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded"
              title="Location Map"
            ></iframe>
          </div>

          <button
            onClick={handleClick}
            className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Enquire Now
          </button>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Enter Your Query</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                >
                  Submit
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Property;
