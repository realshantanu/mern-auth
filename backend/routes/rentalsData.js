const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Rental = require('../models/Rental');
const auth = require("../middleware/auth");

router.post('/newRental', auth, async (req,res) => {
    const token = req.headers['x-auth-token'];
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    const userEmail = decoded.email;

    try{
        console.log(req.body);
        const Place = new Rental({
            owner:userEmail,
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
        const blogs = await Rental.aggregate([
            {
                $lookup: {
                    from: 'users-mern',
                    localField: 'owner',
                    foreignField: 'email', 
                    as: 'ownerDetails'
                }
            },
            {
                $addFields: {
                    ownerDetails: {
                        $map: {
                            input: '$ownerDetails',
                            as: 'ownerDetail',
                            in: {
                                _id: '$$ownerDetail._id',
                                firstname: '$$ownerDetail.firstname',
                                lastname: '$$ownerDetail.lastname',
                                email: '$$ownerDetail.email',
                                number: '$$ownerDetail.number'
                                // Exclude password here
                            }
                        }
                    }
                }
            },
            {
                $sort: { createdAt: -1 } // Sort by creation date in descending order
            },
            {
                $limit: 10 // Limit the number of documents to 10
            }
        ]);
        res.json({status:'ok',data:blogs});
    }catch(err){
        console.log(err)
        res.json({status:'error',error:"Server error"});
    }
})

module.exports = router;