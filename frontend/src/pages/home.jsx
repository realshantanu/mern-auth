import React, { useState } from 'react';
import PropertyCard from '../components/propertyCard';
import Navbar from '../components/navbar';

const propertiesData = [
  {
    id: 1,
    title: 'Beautiful Apartment',
    place: 'Downtown',
    area: 1200,
    bedrooms: 3,
    bathrooms: 2,
    hospitals: ['City Hospital', 'Downtown Clinic'],
    colleges: ['Downtown College', 'City University'],
    likes: 10,
  },
  // Add more properties as needed
];

const Home = () => {
  const [properties, setProperties] = useState(propertiesData);

  const handleLike = (id) => {
    const updatedProperties = properties.map((property) => {
      if (property.id === id) {
        return { ...property, likes: property.likes + (property.liked ? -1 : 1), liked: !property.liked };
      }
      return property;
    });
    setProperties(updatedProperties);
  };

  const handleInterested = (id) => {
    const property = properties.find((property) => property.id === id);
    // Implement the functionality to show seller details and send email
    alert(`Seller details for property ${property.title}: ${property.place}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onLike={handleLike}
            onInterested={handleInterested}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
