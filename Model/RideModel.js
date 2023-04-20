

const mongoose  = require("mongoose");

const RideSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type: String,
        required : true,
        unique: true
    },
    contactNumber : {
        type : String,
        required : true
    },
    contactEmail : {
        type : String,
        required : true
    },
    fromPostalCode : {
        type : String,
        required : true
    },
    toPostalCode : {
        type: String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false
    },
    isDriving : { // means this ride is driving for users or looking for ride
        type : Boolean,
        default : false
    },
    date : {
        type : Date,
        required : true
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model("Ride", RideSchema)
