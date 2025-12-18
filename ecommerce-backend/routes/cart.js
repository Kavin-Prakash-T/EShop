const express=require("express")
const { addToCart, getCart,updateQuantity,removeProductFromCart } = require("../controllers/cartController")
const authMiddleware = require("../middlewares/authMiddleware")
const router=express.Router()


router.get("/",authMiddleware, getCart)
router.post("/",authMiddleware, addToCart)
router.put("/:productId", authMiddleware, updateQuantity)
router.delete("/:productId", authMiddleware, removeProductFromCart)


module.exports=router