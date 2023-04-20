

const mongoose  = require("mongoose");

const HitChikerUserSchema = new mongoose.Schema({
    displayName : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    bio : {
        type: String,
        default: "Your Bio..."
    }
})

module.exports = mongoose.model("HitChikerUser", HitChikerUserSchema)
