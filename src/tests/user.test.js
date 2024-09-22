import User from '../models/user.model'
import {dbConnection,dbDisconnect} from '../config/dbConfig/mongod.dbConfig'

beforeAll(async () => dbConnection());
afterAll(async () => dbDisconnect());


describe('Running Sample Test Cases using in-memory Database',()=>{
    test('simple test case',async()=>{
        const user=await new User({userName:"john",email:"john@gmail.com",password:"john@gmail.com"}).save()
        console.log(user)
        expect(10).toBe(10)
        
    })
})
