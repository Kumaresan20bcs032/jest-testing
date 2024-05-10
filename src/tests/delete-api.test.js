import supertest from 'supertest'
import app from '../server' 

describe('Restful broker api tests',()=>{
    test('Deleting broker details',(done)=>{
        supertest(app)
        .delete('/test')
        .expect(200)
        .end((err,res)=>{
            const response={
                "status_code": 200,
                "status": true,
                "message": "broker details deleted",
                "data": [
                    null
                ]
            }
            expect(res.body).toEqual(response)
            if(err){
                return done(err)
            }
            return done()
        })
    })
})