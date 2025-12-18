require("dotenv").config();
const express=require("express")
const cors=require("cors")
const createDB=require("./config/db")

const app = express();


const productRoutes=require("./routes/products")
const cartRoutes=require("./routes/cart")
const authRouter=require("./routes/auth")
const orderRouter=require("./routes/order")

createDB()

app.use(express.json());
app.use(cors());


app.use("/products",productRoutes)
app.use("/cart",cartRoutes)
app.use("/auth",authRouter)
app.use("/orders",orderRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
