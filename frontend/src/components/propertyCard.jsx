import React, { useState } from "react";

const PropertyCard = ({ property, onLike, onInterested }) => {
  const [liked, setLiked] = useState(property.liked || false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(property.id);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://via.placeholder.com/400x300"
        alt="property"
      />
      <div className="px-4 py-2">
        <h2 className="font-bold text-2xl mb-2">{property.title}</h2>
        <p className="text-gray-700 text-base">
          <strong>Place:</strong> {property.place}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Area:</strong> {property.area} sqft
        </p>
        <p className="text-gray-700 text-base">
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>

        <div>
          <p className="text-gray-700 text-base">
            <strong>Nearby Hospitals:</strong>
          </p>
          <ul className="list-disc list-inside">
            {property.landmark.hospitals.map((hospital, index) => (
              <li key={index} className="text-gray-700 text-base">
                {hospital}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-gray-700 text-base">
            <strong>Nearby Colleges:</strong>
          </p>
          <ul className="list-disc list-inside">
            {property.landmark.colleges.map((college, index) => (
              <li key={index} className="text-gray-700 text-base">
                {college}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleLike}
            className={`mr-4 py-2 px-4 rounded ${
              liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {liked ? "Unlike" : "Like"} ({property.likes})
          </button>
          <button
            onClick={() => onInterested(property.id)}
            className="text-blue-500 mt-2 ml-4"
          >
            I'm Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
