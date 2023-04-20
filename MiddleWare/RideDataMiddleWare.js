export const validateDataForRide = (req, res) => {
    if (!data.from) {
        res.status(400).json({success : false, "message" : "Please send place from where you want to start the ride.", data : {}})
        return 
    }

    if (!data.to) {
        res.status(400).json({success : false, "message" : "Please provide end place", data : {}})
        return 
    }
    

    if (!data.contactNumber) {
        res.status(400).json({success : false, "message" : "Please Provide Contact Number", data : {}})
        return 
    }

    if (!data.contactEmail) {
        res.status(400).json({success : false, "message" : "Please Provide Contact Email", data : {}})
        return 
    }

    if(!data.fromPostalCode) {
        res.status(400).json({success : false, "message" : "Please Provide fromPostalCode", data : {}})
        return 
    }

    if(!data.toPostalCode) {
        res.status(400).json({success : false, "message" : "Please Provide toPostalCode", data : {}})
        return 
    }

    if(!data.date) {
        res.status(400).json({success : false, "message" : "Please Provide date", data : {}})
        return 
    }

}