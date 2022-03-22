const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    interest:{type:String},
    favorites:{type:Array},
    
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel