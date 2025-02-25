import express from 'express';
import { createUser, loginUser, logoutCurrentuser } from '../controllers/userControllers.js';
const router = express.Router()

router.route('/').post(createUser)
router.post('/auth', loginUser)
router.post('/logout', logoutCurrentuser)


export default router;