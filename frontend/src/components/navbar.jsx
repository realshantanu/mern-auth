import React from 'react';

const Navbar = ({ onAddPropertyClick, onFilterClick }) => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-gray-800">PropertyApp</a>
        <div>
        <button onClick={onFilterClick} className="text-black mr-4">Filter</button>
        <button
            onClick={onAddPropertyClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Property
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
