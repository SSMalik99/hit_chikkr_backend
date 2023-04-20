

const express = require('express')
const { createUser, getUser } = require('../Controller/HitChikerUserController')
const { createRide, getSingleRide, getTravellers, getRides, deleteRide, markRideAsCompleted, rideCountForUser } = require('../Controller/RideController')
const { validateDataForRide } = require('../MiddleWare/RideDataMiddleWare')


const router = express.Router()

router
    .post("/", validateDataForRide, createRide) // create user
    .get("/traveller", getTravellers)
    .post("/delete/:id", deleteRide)
    .post("/complete/:id", markRideAsCompleted)
    .get("/ride_count/:email", rideCountForUser)
    .get("/", getRides)
    .get("/:id", getSingleRide) //get single user
    
    

module.exports = router