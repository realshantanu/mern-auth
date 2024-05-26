const express = require('express')
const router = express.Router();

const User = require('../models/User');
const Rental = require('../models/Rental');


router.post('/register', async (req, res) => {

    try{
        const user = await User.findOne({email:req.body.email});
        if(user){
            return res.json({status:'error',error:"User already exists"});
        }
        const newUser = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            number:req.body.number,
            email:req.body.email,
            password:req.body.password
        });
        await newUser.save();

        res.json({status:'ok'});
    }catch(err){
        console.log(err)
        res.json({status:'error',error:"Server error"});
    }
    console.log(req.body)
});

router.post('/login', async (req, res) => {

    try{
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(!user){
            return res.json({status:'error',error:"Invalid email or password"});
        }
        else{
            const token = jwt.sign({
                name: user.name,
                email: user.email},process.env.JWTSECRET);
            res.json({status:'ok', user:token});
        }
    }catch(err){
        console.log(err)
        res.json({status:'error',error:"Server error"});
    }
    console.log(req.body)
});

module.exports = router;