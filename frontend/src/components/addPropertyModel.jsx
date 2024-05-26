import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Tag = ({ tag, onRemove }) => (
  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded inline-flex items-center">
    {tag}
    <button type="button" className="ml-1 text-gray-600 hover:text-gray-900" onClick={onRemove}>
      &times;
    </button>
  </span>
);

const AddPropertyModal = ({ isVisible, onClose, onSubmit }) => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: '',
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    hospitals: [],
    colleges: [],
    description: '',
    rent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { name, value } = e.target;
      if ((name === 'hospitals' || name === 'colleges') && value.trim()) {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: [...prevValues[name], value.trim()],
        }));
        e.target.value = ''; // Clear the input field after adding the value
      }
    }
  };

  const handleRemoveTag = (name, index) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: prevValues[name].filter((_, i) => i !== index),
    }));
  };

  async function handleSubmit(e){
    e.preventDefault();
    const landmark = JSON.stringify({
      hospitals: formValues.hospitals,
      colleges: formValues.colleges
    })  

    const response = await fetch('http://localhost:5000/api/newRental', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
			},
			body: JSON.stringify({
        owner: "harshalmukundapatil@gmail.com",
        title: formValues.title,
        location: formValues.place,
        area: formValues.area,
        bedrooms: formValues.bedrooms,
        bathrooms: formValues.bathrooms,
        landmark: landmark,
        rent: formValues.rent
      })
		})

		const data = await response.json()
    
    if(data.status === 'ok'){
      alert('Registration successful')
      // navigate('/login')
    }else{
      if(data.error == "1001"){
        navigate("/login")
      }else{
        alert(data.error)
      }
    }

    onClose(); // Close modal after submission
  };

  return (
    <div className={`${isVisible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed inset-0 top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow :bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t :border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 :text-white">Add New Property</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center :hover:bg-gray-600 :hover:text-white"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Title</label>
                <input type="text" name="title" id="title" value={formValues.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Property Title" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Place</label>
                <input type="text" name="place" id="place" value={formValues.place} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Property Location" required />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Area (sqft)</label>
                <input type="number" name="area" id="area" value={formValues.area} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Area in sqft" required />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="bedrooms" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Bedrooms</label>
                <input type="number" name="bedrooms" id="bedrooms" value={formValues.bedrooms} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Number of Bedrooms" required />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="bathrooms" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Bathrooms</label>
                <input type="number" name="bathrooms" id="bathrooms" value={formValues.bathrooms} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Number of Bathrooms" required />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="rent" className="block mb-2 text-sm font-medium text-gray-900 :text-white">rent</label>
                <input type="number" name="rent" id="rent" value={formValues.rent} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Rent Amount per month" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="hospitals" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Nearby Hospitals</label>
                <div className="flex flex-wrap items-center gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {formValues.hospitals.map((hospital, index) => (
                    <Tag key={index} tag={hospital} onRemove={() => handleRemoveTag('hospitals', index)} />
                  ))}
                  <input type="text" name="hospitals" id="hospitals" onKeyDown={handleKeyDown} className="flex-grow bg-transparent focus:outline-none :placeholder-gray-400 :text-white" placeholder="Add a hospital" />
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="colleges" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Nearby Colleges</label>
                <div className="flex flex-wrap items-center gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                  {formValues.colleges.map((college, index) => (
                    <Tag key={index} tag={college} onRemove={() => handleRemoveTag('colleges', index)} />
                  ))}
                  <input type="text" name="colleges" id="colleges" onKeyDown={handleKeyDown} className="flex-grow bg-transparent focus:outline-none :placeholder-gray-400 :text-white" placeholder="Add a college" />
                </div>
              </div>
            </div>
            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;
