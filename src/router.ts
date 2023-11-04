import express from "express";
import { postUser, getUsers, getUserById, putUser, deleteUser } from "./controller/userController";

const router = express.Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', postUser)
router.put('/user/:id', putUser)
router.delete('/user/:id', deleteUser)

export default router