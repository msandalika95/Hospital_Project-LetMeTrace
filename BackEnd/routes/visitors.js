const router = require("express").Router();
let Hospital = require("../models/checkIns");
let Patient = require("../models/vac");

router.route("/add").post((req, res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);

    const name = req.body.name;
    const nicc = req.body.nicc;
    const location = req.body.location;
    const date = req.body.date;
    const vacType = req.body.vacType;
    const checkedOne = req.body.checkedOne;
    const checkedTwo = req.body.checkedTwo;

    const newVisitor = new Hospital({
        nic,
        telnumber
    })

    const newVisitor1 = new Patient({
        name,
        nicc,
        location,
        date,
        vacType,
        checkedOne,
        checkedTwo
    })

    newVisitor.save().then(() => {
        res.json("Visitor added.")
    }).catch((err) => {
        console.log(err);
    })

    newVisitor1.save().then(() => {
        res.json("Details added.")
    }).catch((err) => {
        console.log(err);
    })

})



router.route("/").get((req, res) => {
    Patient.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;