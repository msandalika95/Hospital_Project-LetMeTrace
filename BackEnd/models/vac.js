const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const visitorSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    nicc : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    vacType : {
        type : String,
        required : true
    },
    checkedOne : {
        type : String
    },
    checkedTwo : {
        type : String
    }
})

const Patient = mongoose.model("Patient", visitorSchema);
module.exports = Patient;
