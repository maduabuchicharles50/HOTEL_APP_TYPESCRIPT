import express from "express"
const router = express.Router()
import roomController from "../controller/roomController"
import isLoggedIn from "../middleware/authentication"

router.post('/',isLoggedIn, roomController.create)
router.get('/:id', isLoggedIn, roomController.findById)
router.patch('/:id', isLoggedIn, roomController.update)
router.get('/', isLoggedIn, roomController.getAllRoom)
router.delete('/:id', isLoggedIn, roomController.delete)

module.exports = router