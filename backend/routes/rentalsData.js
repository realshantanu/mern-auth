const express = require('express')
const router = express.Router();

const User = require('../models/User');
const Rental = require('../models/Rental');

router.post('/newRental', async (req,res) => {
    try{
        console.log(req.body);
        const Place = new Rental({
            owner:req.body.owner,
            title:req.body.title,
            location:req.body.location,
            area:req.body.area,
            bedrooms:req.body.bedrooms,
            bathrooms:req.body.bathrooms,
            landmark:req.body.landmark,
            rent:req.body.rent,
            likes:0
        })
        await Place.save();
        res.json({status:'ok'});
    }catch(err){
        console.log(err)
        res.json({status:'error',error:"Server error"});
    }
})

router.get('/getRentals', async(req,res) => {
    try{
        const blogs = await Rental.find({}).sort({createdAt: -1}).limit(10);
        res.json({status:'ok',data:blogs});
    }catch(err){
        console.log(err)
        res.json({status:'error',error:"Server error"});
    }
})

module.exports = router;