

const express = require('express')
const { createUser, getUser } = require('../Controller/HitChikerUserController')


const router = express.Router()

router
    .post("/", createUser) // create user
    .get("/:id", getUser) //get single user
    

module.exports = router