var mongoose = require('mongoose')

var facultySchema = new mongoose.Schema({
    faculty_name:{
        type: 'String',
    },
    faculty_department: {
        type: 'String',
    },
    salary: {
        type: 'String',
    },
    time: {
        type: 'String',
    }
})

module.exports = mongoose.model('faculty',facultySchema);