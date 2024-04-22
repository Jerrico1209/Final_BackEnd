const hostname = '127.0.0.1'
const port = 3000

const express = require('express')
const app = express()
const errorhandler = require('errorhandler')
const bodyparser = require('body-parser')
const adminController = require ('./src/components/Admin/admin.controller')

app.use(express.json())

app.get('/', (req, res) => {
    const data =
    '<body><h1>Welcome to my API for Final Back-End Project</h1><blockquote>- Created by Walangitan, Jerrico</blockquote><q>i just learn that you can put a HTML tags in express.js</q></body>'
    res.status(200).send(data)
})

app.use('/admin', adminController)

app.listen(port, () => 
    console.log(`Server Running at: http://${hostname}:${port}`))