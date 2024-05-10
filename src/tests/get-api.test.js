import supertest from "supertest";
import app from '../server'

describe('Restful broker api tests', () => {
    test('Getting broker details', (done) => {
        supertest(app).get('/test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((error, res) => {
                expect(res.body).toEqual(
                    {
                        "status_code": 200,
                        "status": true,
                        "message": "broker details",
                        "data": [
                            {
                                "name": "john",
                                "email": "john@gmail.com",
                                "amount": 500,
                                "deposit": true
                            }
                        ]
                    }
                )
                if (error) {
                    return done(error)
                }
                return done()
            })

    })

})
