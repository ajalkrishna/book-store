const exp = require('express')
const userApp = exp.Router()
userApp.use(exp.json())
const userModel = require('../models/user')
const bookModel = require('../models/books')
const bcryptjs = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
require('dotenv').config()
const jwt = require('jsonwebtoken')

// create user
userApp.post('/create-user', expressAsyncHandler(async (req, res) => {
    let userClientInfo = req.body
    // check existance
    let userFromDb = await userModel.findOne({ username: userClientInfo.username })
    // check existance
    if (userFromDb !== null) {
        res.send({ message: 'user already exist' })
    }
    else {
        let userDoc = new userModel({ ...userClientInfo })
        // hash password
        let hashedPw = await bcryptjs.hash(userClientInfo.password, 5)
        // replace 
        userDoc.password = hashedPw
        await userDoc.save()

        res.status(200).send({ message: "user created successfully" })
    }
}))
// loginuser
userApp.post('/login', expressAsyncHandler(async (req, res) => {
    let loginCreds = req.body
    // check existance
    let userFromDb = await userModel.findOne({ email: loginCreds.email })
    // if no user
    if (userFromDb == null) {
        res.send({ message: 'Invalid email-id' })
    }
    else {
        // user exists and check the password
        let status = await bcryptjs.compare(loginCreds.password, userFromDb.password)
        if (status == false) {
            res.status(200).send({ message: 'invalid password' })
        }
        else {
            let token = jwt.sign({ email: userFromDb.email }, process.env.SECRET_KEY, { expiresIn: 120 })
            res.status(200).send({ message: 'Login successful', token: token, payload: userFromDb })
        }
    }
}))
// get user
userApp.get('/get-user/:email', expressAsyncHandler(async (req, res) => {
    let email = req.params.email
    let userData = await userModel.findOne({ email: email })
    if (userData == null) {
        res.status(200).send({ message: "Invalid email!" })
    } else {
        res.status(200).send({ message: "User fetched successfully!", payload: userData })
    }
}))
// addbooks
userApp.post('/add-book', expressAsyncHandler(async (req, res) => {
    let bookData = req.body
    // check existance
    let bookFromDb = await bookModel.findOne({ title: bookData.title })
    // check existance
    if (bookFromDb !== null) {
        res.send({ message: 'Book already exist' })
    }
    else {
        let bookDoc = new bookModel({ ...bookData })
        await bookDoc.save()

        res.status(200).send({ message: "Book Added successfully" })
    }
}))
// getbooks
userApp.get('/books', expressAsyncHandler(async (req, res) => {
    let books = await bookModel.find()
    if (books == null) {
        res.status(200).send({ message: "No Books Available" })
    }
    else {
        res.status(200).send({ message: "Book collected Successfully", payload: books })
    }
}))
// addtofavorites
userApp.put('/add-to-favorites', expressAsyncHandler(async (req, res) => {
    let bookData = req.body
    let user = await userModel.findOne({ email: bookData.email })
    if (user !== null) {
        let UpdatedFavorites = user.favorites
        UpdatedFavorites.push(bookData.book)
        let updatedFav = await userModel.updateOne({ email: user.email }, { $set: { favorites: UpdatedFavorites } })
        res.status(200).send({ message: "Succefully added to Favorites" })
    }
    else {
        res.status(200).send({ message: "No User Found" })
    }
}))
// addcomments
userApp.put('/add-comments', expressAsyncHandler(async (req, res) => {
    let commentData = req.body
    let book = await bookModel.findOne({ title: commentData.title })
    if (book !== null) {
        let updatedComments = book.comments
        updatedComments.push(commentData.commentObj)
        let result = await bookModel.updateOne({ title: book.title }, { $set: { comments: updatedComments } })
        res.status(200).send({ message: 'comments updated' })
    }
    else {
        res.status(200).send({ message: 'Unavailable book!!' })
    }
}))
// add to recommendation
userApp.put('/update-recommendation', expressAsyncHandler(async (req, res) => {
    let updateObj = req.body
    let result = await bookModel.findOneAndUpdate({ title: updateObj.title }, { $set: { recommendation: updateObj.status } })
    if (result == null) {
        res.status(200).send({ message: 'No Book is available' })
    }
    else {
        res.status(200).send({ message: 'recommendation status Updated' })
    }

}))
// remove favs
userApp.put('/remove-favorite', expressAsyncHandler(async (req, res) => {
    let favBook=req.body
    let user = await userModel.findOne({email:favBook.email})
    if(user==null){
        res.status(200).send({ message: 'User not found!!' })
    }
    else{
        let favorites = user.favorites
        let index = favorites.indexOf(favorites.find(book=>book.title==favBook.title))
        favorites.splice(index,1)
        let result = await userModel.updateOne({ email: user.email }, { $set: { favorites: favorites } })
        res.status(200).send({ message: 'Book Removed from Favorites' })



    }
}))

// error handler
userApp.use((err, req, res, next) => {
    res.send({ message: err.message })
})
// export express mini app
module.exports = userApp