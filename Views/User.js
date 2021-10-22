const {User} = require("../DB/Schema");
const jwt = require("jsonwebtoken");
const RegisterUser = (req, res) => {
    User.insertMany({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // we does not store password in plain format for production we you hashing to encrypt the password
        product_purchased: []
    }, (e, _) => {
        if (!e) {
            res.status(201).send();
        } else {
            res.status(406).json({
                "error": "email is already registered"
            });
        }
    })
}

const Login = (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password, // we does not store password in plain format for production we you hashing to encrypt the password
    }, {_id: 1, email: 1, name: 1}, (e, _) => {
        if (!e && _ !== null) {
            const user = {id: _._id, email: _.email, name: _.name}
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1d"});
            res.cookie("access_token",token,{
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
                expires: new Date(new Date().getTime()+1*24*60*60*1000),
                path:"/",
                sameSite:"none",
            })
                .status(200)
                .json({isLogin:true})
        } else {
            res.status(406).json({
                "error": "email or password is wrong"
            });
        }
    })
}

module.exports = {RegisterUser, Login};