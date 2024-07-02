const ApiError = require('../utils/ApiErrors')
const ApiResponse = require('../utils/ApiResponse')
const asyncHandler = require('../utils/asyncHandler')

const BlogService = require('../services/blog.service')


const allBlogs = asyncHandler(async (req, res) => {
    try {
        const data = await BlogService.getAllBlogs()

        return res.status(200).json(new ApiResponse(200, data, "All blog get  successfully"))


    } catch (error) {
        console.log("errors", error.message)

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }


})
const getPerticularBlog = asyncHandler(async (req, res) => {
    try {
        const data = await BlogService.getBlogsById(req)


        return res.status(200).json(new ApiResponse(200, data, "Blog get succesfuully"))



    } catch (error) {

        if (error instanceof ApiError) {

            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }
        console.log("error", error)

        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }
})
const createNewBlog = asyncHandler(async (req, res) => {
    try {
        await BlogService.createBlog(req, req.body)
        return res.status(200).json(new ApiResponse(200, "Blog created successfully"))
    } catch (error) {
        console.log("error", error.message)
        throw new ApiError(400, " something went wrong while creating blog")


    }
})
const updateBlog = asyncHandler(async (req, res) => {
    try {
        const data = await BlogService.updateBlog(req, req.body)
        return res.status(200).json(new ApiResponse(200, "updated blog"))

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))

        }
        return res.status(500).json(new ApiResponse(500, null, "something went wrong"))

    }


})
const deleteBlog = asyncHandler(async (req, res) => {
    try {
        await BlogService.deleteBlog(req)
        return res.status(400).json(new ApiResponse(200, "Blog deleted successfully"))

    } catch (error) {
        console.log("error....", error.message)
        if (error instanceof ApiError) {
            return res.status(error.status).json(new ApiResponse(error.statusCode, null, error.message))
        }
        return res.status(500).json(new ApiResponse(500, null, "something went wrong"))

    }

})
const getblogByFilter = asyncHandler(async (req, res) => {
    try {
        const data = await BlogService.getfilteredBlog(req)
        return res.status(200).json(new ApiResponse(200, data, "get filter data"))

    } catch (error) {
        throw new ApiError(400, error.message)

    }



})



module.exports = { allBlogs, createNewBlog, deleteBlog, getPerticularBlog, getblogByFilter, updateBlog }