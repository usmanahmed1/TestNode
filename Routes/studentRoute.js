const router = require("express").Router();
const Student = require("../Model/studentModel.js");

router.post("/AddStudent", async (req, res) => {
    var stdId = req.body.Id;
    var stdName = req.body.Name;
    var stdAge = req.body.Age;
    var mobNo = req.body.Mobile;

    const std = new Student({
        StudentId: stdId,
        StudentName: stdName,
        Age: stdAge,
        MobileNo: mobNo
    });

    var newStd = await std.save();
    res.json(newStd);
});

router.get("/GetAllStudents", async (req, res) => {
    var students = await Student.find({});
    res.json(students);
});

router.get("/GetStudent", async (req, res) => {
    var student = await Student.findById(req.body.Id);
    if (student != null) {
        res.json(student);
    }
    else {
        res.status(400).json({
            Error: "No Student Found Upon Id " + req.body.Id
        });
    }
});

router.patch("/UpdateStudent", async (req, res) => {
    var Id = req.body.Id;
    var student = await Student.findByIdAndUpdate(Id, {
        $set: {
            StudentName: req.body.Name,
            Age: req.body.Age,
            MobileNo: req.body.Mobile
        }
    });

    res.json(student);
});



module.exports = router;