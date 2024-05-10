import express from 'express'
import { getData } from '../controllers/get.controller'
import { postData } from '../controllers/post.controller'

const router = express()

router.post('/',postData)
router.get('/', getData)

export default router