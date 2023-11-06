import express from "express";
import { userMiddleware } from './middleware/userMiddleware'
import { userController } from "./controller/userController";

const router = express.Router()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userMiddleware, userController.postUser)
router.put('/user/:id', userMiddleware, userController.putUser)
router.delete('/user/:id', userController.deleteUser)

export default router