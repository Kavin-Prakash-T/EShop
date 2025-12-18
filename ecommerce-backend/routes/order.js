const express=require("express")
const { addOrder, getOrders } = require("../controllers/orderController")
const authMiddleware = require("../middlewares/authMiddleware")
const router=express.Router()


router.get("/",authMiddleware, getOrders)
router.post("/",authMiddleware, addOrder)


module.exports=router