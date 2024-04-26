const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route('/')
.get(userController.getAllUsers)
.post(userController.addUsers);

userRouter.route('/:_id')
.put(userController.updateUsers)
.delete(userController.deleteUsers);

module.exports = userRouter;
