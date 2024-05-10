import { sendSuccess, sendError } from '../utils/response.utils'

export const deleteData = async (req, res) => {
    try {
        let data = [
            {
                "id": 1,
                "name": "joi",
                "email": "joi@gmail.com",
                "amount": 700,
                "deposit": true
            }
        ]
        const response = data.map((res) => {
            if (res.id == req.body.id) {
                return
            }
        })
        console.log(response)

        return sendSuccess(res, 200, "broker details deleted", response)
    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}