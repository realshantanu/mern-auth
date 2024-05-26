const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req,res,next) {
    // get token from header
    const token = req.headers['x-auth-token'];

    // check if not token
    if(!token){
        return res.send({status:'error',error:"1001"});
    }
     
    try{
        const decoded = jwt.verify(token, process.env.JWTSECRET);
        req.user = decoded.user;
        next();
    }catch(err){
        res.send({status:'error',error:"1001"});
    }
}