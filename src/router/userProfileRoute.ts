import express from "express"
const router = express.Router()
import userProfileController from "../controller/userProfileController"

// const authenticate = require('../middlewares')

router.post('/register', userProfileController.register)
router.post('/login', userProfileController.login)

export default router