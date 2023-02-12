const express = require(`express`)
const usersControler = require(`../controler/users.js`)


const router = express.Router()
//midleware

// router
//create - POST
router.post('/',usersControler.createAllusers)

//read - GET
router.get('/',usersControler.getAllusers)

//update - PATCH
router.patch(`/:id`,usersControler.updateUser)

//Delete - DELETE
router.delete(`/:id`,usersControler.deleteUsers)


module.exports=router