const ApiError = require('../utils/ApiErrors')
const ApiResponse = require('../utils/ApiResponse')
const asyncHandler = require('../utils/asyncHandler')

const UserService = require('../services/user.service')


const userRegister = asyncHandler(async (req, res) => {
    try {
        // console.log('Request data:', req.body);
        await UserService.registerService(req, req.body);
        return res.status(200).json(new ApiResponse(200, "user register successfully"))


    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }


})
const loginUser = asyncHandler(async (req, res) => {
    try {
        const logedInUser = await UserService.loginService(req.body)

        return res.status(200).json(new ApiResponse(200, logedInUser, "Login succesfuully"))



    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }
        console.log("error", error)

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }
})



module.exports = { userRegister, loginUser }