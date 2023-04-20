

const express = require('express')
const { createUser, getUser } = require('../Controller/HitChikerUserController')
const { createRide, getSingleRide, getTravellers, getRides, deleteRide, markRideAsCompleted } = require('../Controller/RideController')
const { validateDataForRide } = require('../MiddleWare/RideDataMiddleWare')


const router = express.Router()

router
    .post("/", validateDataForRide, createRide) // create user
    .get("/:id", getSingleRide) //get single user
    .get("/traveller", getTravellers)
    .get("/", getRides)
    .post("delete/:id", deleteRide)
    .post("complete/:id", markRideAsCompleted)
    

module.exports = router