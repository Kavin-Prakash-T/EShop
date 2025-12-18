const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.userData.id }).populate("products.product");

    if (!cart) {
        return res.status(200).json({ message: "Cart not found", cart: [] });
    }
    res.status(200).json({ cart });
};

const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ user: req.userData.id });

    if (!cart) {
        const newCart = await Cart.create({ user: req.userData.id, products: [{ product: productId, quantity }] });
        return res.status(200).json({ message: "Cart created", cart: newCart });
    }
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    cart.products.push({ product: productId, quantity });
    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
}


const updateQuantity = async (req, res) => {
    const productId = req.params.productId;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.userData.id });
    if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
    }

    const productInCart = cart.products.find(p =>
        p.product.equals(productId)
    );

    if (!productInCart) {
        return res.status(404).json({ error: "Product not found in cart" });
    }

    productInCart.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Product quantity updated", cart });
};


const removeProductFromCart = async (req, res) => {
    const productId = req.params.productId;

    const cart = await Cart.findOne({ user: req.userData.id });
    if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(p =>
        p.product.equals(productId)
    );

    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found in cart" });
    }

    cart.products.splice(productIndex, 1);
    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart });
};


module.exports = { getCart, addToCart ,updateQuantity,removeProductFromCart};