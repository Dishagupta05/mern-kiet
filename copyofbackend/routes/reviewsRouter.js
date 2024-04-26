const express = require("express");
const reviewsController = require('../controllers/reviewsController.js')
const reviewsRouter = express.Router();

reviewsRouter.route('/')
.get(reviewsController.getAllreviews)
.post(reviewsController.addreviews)

reviewsRouter.route('/:_id')
.put(reviewsController.replacereview)

reviewsRouter.route('/:_id')
.delete(reviewsController.deletereview)

module.exports=reviewsRouter;
