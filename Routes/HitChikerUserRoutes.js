

const express = require('express')
const { createUser, getUser, updateBio } = require('../Controller/HitChikerUserController')


const router = express.Router()

router
    .post("/", createUser) // create user
    .get("/:email", getUser) //get single user
    .post("/bio", updateBio)
    

module.exports = router