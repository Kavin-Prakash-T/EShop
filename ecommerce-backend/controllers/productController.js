const Product = require("../models/Product")

const getAllProducts=async (req, res) => {
    const products = await Product.find();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ error: "Products Not found" })
    }
}

const addProduct=async (req, res) => {
    try {
        const count = await Product.countDocuments();
        const newId = count + 1;

        const { name, image_url, price } = req.body;

        const product = await Product.create({
            id: newId,
            name,
            image_url,
            price,
        });

        res.status(201).json({ message: "Product created successfully", product });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports={getAllProducts,addProduct};