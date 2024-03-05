import express from "express";
import {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
} from '../controller/UserController.js'

const router = express.Router()

router.get('/users', getUsers)

router.get('/user/:id', getUser)

router.post('/user', createUser)

router.put('/user/:id', editUser)

router.delete('/user/:id', deleteUser)

export default router