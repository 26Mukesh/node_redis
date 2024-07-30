require('dotenv').config()
const express = require('express')
const { dbConnect } = require('./config/db.config')
const blogRouter = require('./routes/blog.routes')
const app = express()
dbConnect();

app.use('/api', blogRouter)

app.listen(process.env.PORT, () => console.log('server started '+process.env.PORT))