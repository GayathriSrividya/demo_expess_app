const express = require('express')
const app = express()


app.get('/valid', (req, res)=>{
    res.status(200).send('hello world')
})

app.use('*', (req, res)=>{
    res.status(404).send('not found')
})

app.listen(3000, (res, err)=>{
    console.log('listening on port 3000')
})


module.exports=app