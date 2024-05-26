const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req,res,next) {
    // get token from header
    const token = req.header['x-auth-token'];

    // check if not token
    if(!token){
        return res.redirect('/login');
    }
     
    try{
        const decoded = jwt.verify(token, process.env.JWTSECRET);
        req.user = decoded.user;
        next();
    }catch(err){
        res.redirect('/login');
    }
}