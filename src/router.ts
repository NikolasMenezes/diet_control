import express from "express";
import { userMiddleware } from './middleware/userMiddleware'
import { userController } from "./controller/userController";
import { basicsController } from "./controller/basicsController";

const router = express.Router()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userMiddleware, userController.postUser)
router.put('/user/:id', userMiddleware, userController.putUser)
router.delete('/user/:id', userController.deleteUser)

router.get('/user/info/:id', basicsController.getUserBasics)
router.post('/user/info/:id', basicsController.storeUserBasics)
router.put('/user/info/:id', basicsController.putUserBasics)

export default router