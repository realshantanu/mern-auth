const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    rent: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    }
},
{collection: 'rentals'});

const Rentals = mongoose.model('Rentals', RentalSchema);

module.exports = Rentals;
