const Order = require('../models/Order');
const Cart = require('../models/Cart');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.userData.id }).populate('products.product');   
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

const addOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.userData.id });
        if (cart.products.length === 0) {
            return res.status(400).json({ error: 'Cart is empty' });
        }
     
        const order = await Order.create({
            user: req.userData.id,
            products: cart.products,
            totalAmount: req.body.totalAmount,
        });
        
        cart.products = [];
        await cart.save();
        
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Order error:', error);
        res.status(500).json({ error: 'Failed to place order' });
    }
};

module.exports = {getOrders, addOrder};

