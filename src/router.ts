import express from "express";
import { userMiddleware } from './middleware/userMiddleware'
import { postUser, getUsers, getUserById, putUser, deleteUser } from "./controller/userController";

const router = express.Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', userMiddleware, postUser)
router.put('/user/:id', userMiddleware, putUser)
router.delete('/user/:id', deleteUser)

export default router