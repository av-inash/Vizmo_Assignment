
const express = require("express");
const userValidation = require("../validations/user.validation.js");
const { loginUser, userRegister } = require("../controllers/user.controller.js");
const validate = require("../helpers/validate.js");

const router = express.Router();


router.post("/register", validate(userValidation.register), userRegister)
router.post("/login", validate(userValidation.login), loginUser)



module.exports = router;
