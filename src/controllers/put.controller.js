import { sendSuccess, sendError } from "../utils/response.utils";
export const putData = async (req, res) => {
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

        data=[{
            ...req.body
        }]
        return sendSuccess(res,201,"Data updated successfully",data)
    }
    catch (error) {
        return sendError(res, 500, error.messaage)
    }
}