const RideModel = require("../Model/RideModel")



const createRide = async (req, res) => {

    const data = req.body
   

    let ride = await RideModel.create({ from: data.from, to: data.to, contactEmail: data.contactEmail, contactNumber : data.contactNumber, fromPostalCode : data.fromPostalCode, toPostalCode: data.toPostalCode, isCompleted : data.isCompleted ? data.isCompleted : false, isDriving : data.isDriving ? data.isDriving : false, date : data.date})

    res.status(201).json({success: true,message: `Your Ride is created successfully.`, data : ride})
    

}

// get users who want to ride
const getTravellers = async (req, res) => {

}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * Get rides who want to drive
 */
const getRides = async (req, res) => {

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Delete the ride 
 */
const deleteRide = async (req, res) => {

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Mark Ride as completed
 */
const markRideAsCompleted = async (req, res) => {

}

const getSingleRide = async (req, res) => {


    const rideId = req.params.id;
    
    if(!userEmail) {
        res.status(400)
            .json({
                success: false,
                message: "Please send ride Id.",
                data : {}
            })
            return
    }

    let ride = await RideModel.findOne({_id : rideId});

    res.status(200)
        .json({
            success: true,
            message: `Ride detail.`,
            data : ride
        })
}



const rideCountForUser = async ( req, res) => {
    console.log("Inside")
    const emailId = req.param.email
    const takenRide = await RideModel.count({contactEmail:emailId, isDriving:false})
    const givenRide = await RideModel.count({contactEmail:emailId, isDriving:true})
    console.log("YOu are inside")

    return res.status(200).json({
        totalRides : givenRide,
        requestedRide : takenRide
    })
}


module.exports = {
    createRide,
    getTravellers,
    getRides,
    deleteRide,
    markRideAsCompleted,
    getSingleRide,
    rideCountForUser
}