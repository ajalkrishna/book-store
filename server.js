// create express app
const exp=require('express')
const app = exp()
// dotenv import
require('dotenv').config()
const userApp = require('./apis/userApi')
const mongoose = require('mongoose')
const path = require('path')

// connect angular app with backend
app.use(exp.static(path.join(__dirname,'./dist/dragApp')))

// database connection
const dbConnectionUrl=process.env.DBCONNECTIONURL
mongoose.connect(dbConnectionUrl)
.then(()=>console.log('db connection Successfull'))
.catch((err)=>console.log(err.message))


app.use('/user',userApp)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/dragApp/index.html'))
})
// port connection
PORT=process.env.PORT
app.listen(PORT,()=>console.log(`Server listening to ${PORT}`))