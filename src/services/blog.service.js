const Blog = require("../models/blog.model.js")
const ApiError = require('../utils/ApiErrors.js')
const ApiResponse = require('../utils/ApiResponse.js')




class BlogService {
    getAllBlogs = async (req, data) => {
        const blogs = await Blog.find()
        return blogs



    }
    getBlogsById = async (req, res) => {
        const { id } = req.query
        const blog = await Blog.findById(id)
        return blog
    }
    createBlog = async (req, data) => {

        // console.log("data", data)
        const blog = new Blog({

            title: data.title,
            content: data.content,
            images: data.images,
            author: req.user._id
        })
        await blog.save()
        return blog
    }

    updateBlog = async (req, data) => {
        const { id } = req.query
        const blog = await Blog.findById(id)
        if (!blog) {
            throw new ApiError(400, "blog is not found")
        }
        if (blog.author.toString() !== req.user._id.toString()) {
            throw new ApiError(400, "you are not authorized to update this blog")
        }
        blog.title = data.title || blog.title
        blog.content = data.titlle || blog.content
        blog.images = data.images || blog.images
        await blog.save()

    }
    deleteBlog = async (req, res) => {
        const { id } = req.query
        const blog = await Blog.findByIdAndDelete(id)
        if (!blog) {
            throw new ApiError(400, "Blog not found")
        }
        if (blog.author.toString() !== req.user._id.toString()) {
            throw new ApiError(400, "you are not authorize to delete this blog")
        }

    }
    getfilteredBlog = async (req) => {
        const { title, author } = req.query
        let filter = {}
        if (title) filter.title = new RegExp(title, 'i')
        if (author) filter.author = author
        const blogs = await Blog.find(filter)
        return blogs

    }



}
module.exports = new BlogService()
