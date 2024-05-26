import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">PropertyApp</Link>
        <div>
          <Link to="/add-property" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add Property
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
