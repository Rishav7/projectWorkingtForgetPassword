const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel.js')



const getMyOrders = asyncHandler(async (req, res) => {
  //console.log("Req",req.user)
  const orders = await Order.find({ email: req.user.email})
  //console.log("Orders",orders)
  res.json(orders)
})



module.exports = {getMyOrders}
