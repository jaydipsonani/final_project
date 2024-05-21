var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    lastname: { type: String },
    dob: { type: String },
    gender: { type: String },
    contact_number: { type: Number },
    father_contactnumber: { type: Number },
    address: { type: String },
    qualification: { type: String },
    image: { type: String },
    c_name: { type: String },
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "content"
    },
    course_start_date: { type: String},
    pc_laptop: {
        type: String,
        default: "PC"
    },
    installment: {
        type: Array
    }

});

module.exports = mongoose.model('student', studentSchema);
