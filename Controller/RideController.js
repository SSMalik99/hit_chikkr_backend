const RideModel = require("../Model/RideModel")



const createRide = async (req, res) => {

    const data = req.body
   
    console.log(data)

    let ride = await RideModel.create(data)

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
    const fromPostalCode = req.query.from
    const toPostalCode = req.query.to
    const date = req.query.date

    const rides = await RideModel.find({isCompleted : false, date: date})
    res.status(200).json({success: true,message: `Available Rides.`, data : rides})

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