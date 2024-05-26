import React, { useState } from 'react';
import Select from 'react-select';

const areaOptions = [
  { value: '>500', label: '>500 sqft' },
  { value: '>1000', label: '>1000 sqft' },
  { value: '>2000', label: '>2000 sqft' },
  { value: '<2000', label: '<2000 sqft' },
];

const bedroomOptions = [
  { value: '1', label: '1 Bedroom' },
  { value: '2', label: '2 Bedrooms' },
  { value: '3', label: '3 Bedrooms' },
  { value: '4', label: '4 Bedrooms' },
];

const bathroomOptions = [
  { value: '1', label: '1 Bathroom' },
  { value: '2', label: '2 Bathrooms' },
  { value: '3', label: '3 Bathrooms' },
  { value: '4', label: '4 Bathrooms' },
];

const rentOptions = [
  { value: '>500', label: '>$500' },
  { value: '>1000', label: '>$1000' },
  { value: '>1500', label: '>$1500' },
  { value: '<2000', label: '<$2000' },
];

const FilterModal = ({ isVisible, onClose, onFilter }) => {
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedRent, setSelectedRent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      area: selectedArea.map(option => option.value),
      bedrooms: selectedBedrooms.map(option => option.value),
      bathrooms: selectedBathrooms.map(option => option.value),
      rent: selectedRent.map(option => option.value),
    });
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-4">
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <h3 className="text-xl font-medium text-gray-900">Filter Properties</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Area</label>
            <Select
              isMulti
              name="area"
              options={areaOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedArea}
              onChange={setSelectedArea}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bedrooms</label>
            <Select
              isMulti
              name="bedrooms"
              options={bedroomOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedBedrooms}
              onChange={setSelectedBedrooms}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bathrooms</label>
            <Select
              isMulti
              name="bathrooms"
              options={bathroomOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedBathrooms}
              onChange={setSelectedBathrooms}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rent</label>
            <Select
              isMulti
              name="rent"
              options={rentOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedRent}
              onChange={setSelectedRent}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Apply Filters</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
