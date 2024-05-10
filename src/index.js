import app from './server'
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`port started at ${process.env.PORT}`)
})

