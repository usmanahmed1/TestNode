const mongoose = require("mongoose");

const student = new mongoose.Schema({
    StudentId: {
        required: true,
        type: Number
    },
    StudentName: {
        required: true,
        type: String
    },
    Age: {
        required: true,
        type: Number
    },
    MobileNo: {
        required: true,
        type: Number
    }
})
const Student = mongoose.model("student", student);

student.pre('save', async function (next) {
    const doc = this;
    if (doc.isNew) {
        try {
            const lastEntry = await Student.findOne({}, {}, { sort: { 'StudentId': -1 } });
            const newStudentId = lastEntry ? lastEntry.StudentId + 1 : 1;
            doc.StudentId = newStudentId;
        } catch (error) {
            return next(error);
        }
    }
})

module.exports = mongoose.model("students", student);