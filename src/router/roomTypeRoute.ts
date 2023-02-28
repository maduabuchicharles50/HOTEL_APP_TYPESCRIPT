import exp from "constants"
import express from "express"
const router = express.Router()
import roomTypeController from "../controller/roomTypeController"

// const authenticate = require('../middlewares')

router.post('/',  roomTypeController.create)
router.get('/:id', roomTypeController.getRoomType)
router.patch('/:id', roomTypeController.update)
router.get('/', roomTypeController.getRoomTypes)
router.delete('/:id', roomTypeController.delete)

export default router