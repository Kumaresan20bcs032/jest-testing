import express from 'express'
import { getData } from '../controllers/get.controller'
import { postData } from '../controllers/post.controller'
import { deleteData } from '../controllers/delete.controller'
import { putData } from '../controllers/put.controller'
const router = express()

router.post('/', postData)
router.get('/', getData)
router.delete('/', deleteData)
router.put('/', putData)
export default router