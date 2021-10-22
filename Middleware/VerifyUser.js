const jwt = require("jsonwebtoken");
const VerifyUser = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({"error": "Unauthorized"})
    }
    else{
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(e,_)=>{
            if(e){
                return res.status(401).json({"error": "Unauthorized"})
            }else{
                req.user = _;
                next();
            }
        })
    }
    // res.send("its working");
}
module.exports = VerifyUser;