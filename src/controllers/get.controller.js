import Broker from '../json/broker.json'
import { sendSuccess, sendError } from "../utils/response.utils"
export const getValue = (req, res) => {
    return sendSuccess(res, 200, "broker details",Broker)
}