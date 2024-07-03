const express = require("express");

const { allBlogs, getPerticularBlog, getblogByFilter, updateBlog, deleteBlog, createNewBlog } = require("../controllers/blog.controller.js");

const { verifyJwt } = require("../middlewares/auth.middleware.js")

const router = express.Router();

router.get("/get-all-blogs", verifyJwt, allBlogs)
router.post("/create-blog", verifyJwt, createNewBlog)
router.get("/get-blog-by-id", verifyJwt, getPerticularBlog)
router.put("/update-blog", verifyJwt, updateBlog)
router.delete("/delete-blog", verifyJwt, deleteBlog)
router.get("/get-blog-by-filter", verifyJwt, getblogByFilter)





module.exports = router;