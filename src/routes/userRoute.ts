import express, { type Router } from 'express'
import { addUser, getUsers } from '../controllers/userController'

const router: Router = express.Router()

router.post('/add', addUser)
router.get('/all', getUsers)

export default router
