const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express()
const port = 5000
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');

const User = require('./models/User');


app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/register', async (req, res) => {

    try{
        const user = await User.findOne({email:req.body.email});
        if(user){
            return res.json({status:'error',error:"User already exists"});
        }
        const newUser = new User({
            username:req.body.name,
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

app.post('/api/login', async (req, res) => {

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})