import React, { useState } from 'react';
import PropertyCard from '../components/propertyCard';
import Navbar from '../components/navbar';
import AddPropertyModal from '../components/addPropertyModel';
import UserDetailsModal from '../components/userDetailsModel';
import FilterModal from '../components/filterModel';

const propertiesData = [
  {
    _id: "665331b2e1349761ba52b0e1",
    owner: "harshalmukundapatil@gmail.com",
    title: "hphehe",
    location: "pune",
    area: "10000",
    bedrooms: "10",
    bathrooms: "2",
    landmark: {
      hospitals: ["Hospital 1", "Hospital 2"],
      colleges: ["College 1", "College 2"],
    },
    rent: "1000",
    likes: 0,
    __v: 0,
    ownerDetails: [
      {
        _id: "66531fa95aac863d9537fb56",
        firstname: "harshal",
        lastname: "patil",
        email: "harshalmukundapatil@gmail.com",
        number: "09766243747",
        password: "1234567",
        __v: 0,
      }
    ]
  },
  {
    _id: "665332b2e1349761ba52b0e2",
    owner: "jane.doe@example.com",
    title: "Cozy Studio",
    location: "midtown",
    area: "500",
    bedrooms: "1",
    bathrooms: "1",
    landmark: {
      hospitals: ["Midtown Hospital"],
      colleges: ["Midtown Community College"],
    },
    rent: "800",
    likes: 5,
    __v: 0,
    ownerDetails: [
      {
        _id: "66532fa95aac863d9537fb57",
        firstname: "Jane",
        lastname: "Doe",
        email: "jane.doe@example.com",
        number: "+1234567891",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665333b2e1349761ba52b0e3",
    owner: "robert.brown@example.com",
    title: "Spacious Condo",
    location: "uptown",
    area: "1500",
    bedrooms: "4",
    bathrooms: "3",
    landmark: {
      hospitals: ["Uptown Medical Center"],
      colleges: ["Uptown University"],
    },
    rent: "2000",
    likes: 20,
    __v: 0,
    ownerDetails: [
      {
        _id: "66533fa95aac863d9537fb58",
        firstname: "Robert",
        lastname: "Brown",
        email: "robert.brown@example.com",
        number: "+1234567892",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665334b2e1349761ba52b0e4",
    owner: "emily.clark@example.com",
    title: "Modern Loft",
    location: "downtown",
    area: "1000",
    bedrooms: "2",
    bathrooms: "2",
    landmark: {
      hospitals: ["City Hospital"],
      colleges: ["City University"],
    },
    rent: "1200",
    likes: 15,
    __v: 0,
    ownerDetails: [
      {
        _id: "66534fa95aac863d9537fb59",
        firstname: "Emily",
        lastname: "Clark",
        email: "emily.clark@example.com",
        number: "+1234567893",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665335b2e1349761ba52b0e5",
    owner: "michael.johnson@example.com",
    title: "Suburban House",
    location: "suburbs",
    area: "2000",
    bedrooms: "5",
    bathrooms: "3",
    landmark: {
      hospitals: ["Suburban Health Center"],
      colleges: ["Suburban College"],
    },
    rent: "1800",
    likes: 25,
    __v: 0,
    ownerDetails: [
      {
        _id: "66535fa95aac863d9537fb60",
        firstname: "Michael",
        lastname: "Johnson",
        email: "michael.johnson@example.com",
        number: "+1234567894",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665336b2e1349761ba52b0e6",
    owner: "sarah.williams@example.com",
    title: "Urban Flat",
    location: "city center",
    area: "900",
    bedrooms: "2",
    bathrooms: "1",
    landmark: {
      hospitals: ["Central Hospital"],
      colleges: ["Central College"],
    },
    rent: "1000",
    likes: 12,
    __v: 0,
    ownerDetails: [
      {
        _id: "66536fa95aac863d9537fb61",
        firstname: "Sarah",
        lastname: "Williams",
        email: "sarah.williams@example.com",
        number: "+1234567895",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665337b2e1349761ba52b0e7",
    owner: "james.martinez@example.com",
    title: "Luxury Villa",
    location: "beverly hills",
    area: "3000",
    bedrooms: "6",
    bathrooms: "5",
    landmark: {
      hospitals: ["Beverly Hills Clinic"],
      colleges: ["Beverly Hills University"],
    },
    rent: "5000",
    likes: 50,
    __v: 0,
    ownerDetails: [
      {
        _id: "66537fa95aac863d9537fb62",
        firstname: "James",
        lastname: "Martinez",
        email: "james.martinez@example.com",
        number: "+1234567896",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665338b2e1349761ba52b0e8",
    owner: "linda.garcia@example.com",
    title: "Charming Cottage",
    location: "countryside",
    area: "1100",
    bedrooms: "3",
    bathrooms: "2",
    landmark: {
      hospitals: ["Countryside Health Center"],
      colleges: ["Countryside College"],
    },
    rent: "900",
    likes: 8,
    __v: 0,
    ownerDetails: [
      {
        _id: "66538fa95aac863d9537fb63",
        firstname: "Linda",
        lastname: "Garcia",
        email: "linda.garcia@example.com",
        number: "+1234567897",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665339b2e1349761ba52b0e9",
    owner: "david.hernandez@example.com",
    title: "Penthouse Suite",
    location: "skyline",
    area: "2500",
    bedrooms: "5",
    bathrooms: "4",
    landmark: {
      hospitals: ["Skyline Hospital"],
      colleges: ["Skyline College"],
    },
    rent: "4000",
    likes: 35,
    __v: 0,
    ownerDetails: [
      {
        _id: "66539fa95aac863d9537fb64",
        firstname: "David",
        lastname: "Hernandez",
        email: "david.hernandez@example.com",
        number: "+1234567898",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665340b2e1349761ba52b0ea",
    owner: "karen.lopez@example.com",
    title: "Family Home",
    location: "suburbs",
    area: "1800",
    bedrooms: "4",
    bathrooms: "3",
    landmark: {
      hospitals: ["Suburban Health Center"],
      colleges: ["Suburban College"],
    },
    rent: "1700",
    likes: 22,
    __v: 0,
    ownerDetails: [
      {
        _id: "66540fa95aac863d9537fb65",
        firstname: "Karen",
        lastname: "Lopez",
        email: "karen.lopez@example.com",
        number: "+1234567899",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665341b2e1349761ba52b0eb",
    owner: "charles.lee@example.com",
    title: "Student Apartment",
    location: "university district",
    area: "800",
    bedrooms: "2",
    bathrooms: "1",
    landmark: {
      hospitals: ["University Hospital"],
      colleges: ["University"],
    },
    rent: "1100",
    likes: 18,
    __v: 0,
    ownerDetails: [
      {
        _id: "66541fa95aac863d9537fb66",
        firstname: "Charles",
        lastname: "Lee",
        email: "charles.lee@example.com",
        number: "+1234567800",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665342b2e1349761ba52b0ec",
    owner: "patricia.king@example.com",
    title: "Downtown Condo",
    location: "downtown",
    area: "1300",
    bedrooms: "3",
    bathrooms: "2",
    landmark: {
      hospitals: ["City Hospital"],
      colleges: ["City University"],
    },
    rent: "1600",
    likes: 14,
    __v: 0,
    ownerDetails: [
      {
        _id: "66542fa95aac863d9537fb67",
        firstname: "Patricia",
        lastname: "King",
        email: "patricia.king@example.com",
        number: "+1234567801",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665343b2e1349761ba52b0ed",
    owner: "stephen.miller@example.com",
    title: "Elegant Apartment",
    location: "city center",
    area: "1400",
    bedrooms: "3",
    bathrooms: "2",
    landmark: {
      hospitals: ["Central Hospital"],
      colleges: ["Central University"],
    },
    rent: "1300",
    likes: 16,
    __v: 0,
    ownerDetails: [
      {
        _id: "66543fa95aac863d9537fb68",
        firstname: "Stephen",
        lastname: "Miller",
        email: "stephen.miller@example.com",
        number: "+1234567802",
        password: "password",
        __v: 0,
      }
    ]
  },
  {
    _id: "665344b2e1349761ba52b0ee",
    owner: "elizabeth.moore@example.com",
    title: "Townhouse",
    location: "downtown",
    area: "1600",
    bedrooms: "4",
    bathrooms: "3",
    landmark: {
      hospitals: ["City Hospital"],
      colleges: ["City College"],
    },
    rent: "1900",
    likes: 20,
    __v: 0,
    ownerDetails: [
      {
        _id: "66544fa95aac863d9537fb69",
        firstname: "Elizabeth",
        lastname: "Moore",
        email: "elizabeth.moore@example.com",
        number: "+1234567803",
        password: "password",
        __v: 0,
      }
    ]
  }
];


const Home = () => {
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isUserModalVisible, setUserModalVisible] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleLike = (id) => {
    const updatedProperties = properties.map((property) => {
      if (property.id === id) {
        return { ...property, likes: property.likes + (property.liked ? -1 : 1), liked: !property.liked };
      }
      return property;
    });
    setProperties(updatedProperties);
    setFilteredProperties(updatedProperties);
  };

  const handleInterested = (id) => {
    const property = properties.find((property) => property.id === id);
    if (property) {
      setSelectedUser(property.ownerDetails);
      setUserModalVisible(true);
    }
  };

  const handleAddProperty = (newProperty) => {
    const newId = properties.length ? properties[properties.length - 1].id + 1 : 1;
    setProperties([...properties, { ...newProperty, id: newId, likes: 0 }]);
    setFilteredProperties([...properties, { ...newProperty, id: newId, likes: 0 }]);
  };

  const handleFilter = (filters) => {
    const filtered = properties.filter((property) => {
      return (
        (!filters.area.length || filters.area.includes(String(property.area))) &&
        (!filters.bedrooms.length || filters.bedrooms.includes(String(property.bedrooms))) &&
        (!filters.bathrooms.length || filters.bathrooms.includes(String(property.bathrooms))) &&
        (!filters.rent.length || filters.rent.includes(String(property.rent)))
      );
    });
    setFilteredProperties(filtered);
  };

  const toggleAddModal = () => {
    setAddModalVisible(!isAddModalVisible);
  };

  const toggleUserModal = () => {
    setUserModalVisible(!isUserModalVisible);
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <>
      <Navbar onAddPropertyClick={toggleAddModal} onFilterClick={toggleFilterModal} />
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onLike={handleLike}
            onInterested={handleInterested}
          />
        ))}
      </div>
      <AddPropertyModal isVisible={isAddModalVisible} onClose={toggleAddModal} onSubmit={handleAddProperty} />
      <UserDetailsModal isVisible={isUserModalVisible} onClose={toggleUserModal} user={selectedUser} />
      <FilterModal isVisible={isFilterModalVisible} onClose={toggleFilterModal} onFilter={handleFilter} />
    </>
  );
};

export default Home;
