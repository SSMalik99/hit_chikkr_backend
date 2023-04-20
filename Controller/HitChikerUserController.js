const HitChikerUserModel = require("../Model/HitChikerUserModel")

const createUser = async (req, res) => {

    const data = req.body
    if (!data.displayName) {
        res.status(400).json({success : false, "message" : "Please send display name", data : {}})
        return 
    }

    if (!data.email) {
        res.status(400).json({success : false, "message" : "Please provide user email", data : {}})
        return 
    }
    

    if (!data.phoneNumber) {
        res.status(400).json({success : false, "message" : "Please send user phone number", data : {}})
        return 
    }


    let user = await HitChikerUserModel.create({ displayName: data.displayName, phoneNumber: data.phoneNumber, email: data.email})

    res.status(201).json({success: true,message: `${user.displayName} is created successfully.`, data : user})
    
}

const getUser = async (req, res) => {

    const userEmail = req.params.email;
    
    if(!userEmail) {
        res.status(400)
            .json({
                success: false,
                message: "Please send user email.",
                data : {}
            })
            return
    }

    let user = await HitChikerUserModel.findOne({email : userEmail});

    res.status(200)
        .json({
            success: true,
            message: `${user.displayName}'s detail.`,
            data : user
        })
}

module.exports = {
    createUser,
    getUser
}