import Broker from '../json/broker.json'
import { sendSuccess, sendError } from '../utils/response.utils'
export const postData = async (req, res) => {
    try {
            return sendSuccess(res, 201, "New data can be added", req.body)
    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}