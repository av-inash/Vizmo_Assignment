const User = require('../models/user.model.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class CommonHelper {

    hashPassword = async (password) => {
        return await bcrypt.hash(password, 10);
    }


    isPasswordCorrect = async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword)
    }
    generateAccessToken = async (user) => {
        return jwt.sign(

            {
                _id: user._id,
                email: user.email,

            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        );
    }
    generateRefreshToken = async (user) => {
        return jwt.sign(
            {
                id: user._id
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        );
    }





}

module.exports = new CommonHelper()