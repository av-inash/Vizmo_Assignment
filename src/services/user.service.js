const User = require('../models/user.model.js')
const ApiError = require('../utils/ApiErrors.js')
const ApiResponse = require('../utils/ApiResponse.js')
const CommonHelper = require('../utils/commonHelper.js')



class UserService {
    registerService = async (req, data) => {
        const existedUser = await User.findOne({ email: data.email })
        if (existedUser) {

            throw new ApiError(400, "This email is already in use.")
        }

        const passwordHash = await CommonHelper.hashPassword(data.password);



        const user = await User.create({
            email: data.email,

            password: passwordHash,
            name: data.name,

        })
        return user


    }
    loginService = async (data) => {
        const user = await User.findOne({ email: data.email })
        if (!user) {
            throw new ApiError(400, "User does not exist")
        }
        const isPasswordValid = await CommonHelper.isPasswordCorrect(data.password, user.password)
        if (!isPasswordValid) {

            throw new ApiError(400, "Invalid user Credential")
        }

        await user.save()


        const accessToken = await CommonHelper.generateAccessToken(user._id)
        const refreshToken = await CommonHelper.generateRefreshToken(user._id)
        return { accessToken, refreshToken, user }

    }



}
module.exports = new UserService()
