import supertest from 'supertest'
import app from '../server'

describe('Restful broker api test', () => {
    test('Posting broker details', (done) => {
        supertest(app).post('/test')
            .send({
                "name": "joi",
                "email": "joi@gmail.com",
                "amount": 700,
                "deposit": true
            })
            .set('Content-Type', 'application/json')
            .expect(201)
            .end((err, res) => {
                const actual = {
                    "status_code": 201,
                    "status": true,
                    "message": "New data can be added",
                    "data": {
                        "name": "joi",
                        "email": "joi@gmail.com",
                        "amount": 700,
                        "deposit": true
                    }
                }
                expect(res.body).toEqual(actual)
                if (err) {
                    return done(err)
                }
                return done()
            })

    })
})