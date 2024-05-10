import express from 'express'
import { getValue } from '../controllers/get.controller'

const router = express()

router.post('/')
router.get('/', getValue)

export default router