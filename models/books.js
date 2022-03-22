const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{type:String},
    author:{type:String},
    category:{type:String},
    language:{type:String},
    description:{type:String},
    recommendation:{type:Boolean,default:false},
    comments:{type:Array}

})

const bookModel = mongoose.model('books',bookSchema)

module.exports = bookModel