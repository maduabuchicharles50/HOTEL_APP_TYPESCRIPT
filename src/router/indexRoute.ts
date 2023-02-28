import express from "express"
const router = express.Router()

const roomRoute = require('./roomRoute')
const roomTypeRoute = require('./roomTypeRoute')
const userProfileRouter = require('./userProfileRouter')


router.use('/user', userProfileRouter)
router.use('/roomType', roomTypeRoute)
router.use('/room', roomRoute)

export default router
