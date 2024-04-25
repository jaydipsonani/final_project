var mongoose = require('mongoose')

// Schema

var registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    role:{
        type: String,
        enum: ['1', '2','3'],
        default: '1'
    }
})

module.exports = mongoose.model('register', registerSchema)
