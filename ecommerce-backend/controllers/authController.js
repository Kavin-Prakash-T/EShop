const User = require("../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password,role } = req.body;
        
        console.log("Registration attempt:", { name, email, role });
        
        const existingUser=await User.findOne({email});
        if(existingUser){
            console.log("User already exists:", email);
            return res.status(400).json({error:"User already exist"});
        }
        const hashpassword=await bcrypt.hash(password,10);
        const user = await User.create({ name, email, password:hashpassword ,role});
        console.log("User created successfully:", user._id);
        res.status(201).json({ message: "User created succesfully",user })
    } catch (err) {
        console.error("Registration error:", err);
        // Handle MongoDB duplicate key error
        if (err.code === 11000) {
            return res.status(400).json({ error: "User already exist" });
        }
        res.status(400).json({ error: err.message });
    }
}

const getUser = async (req, res) => {
    const users = await User.find();
    if (users) {
        res.status(200).json(users);
    } else {
        res.status(404).json({ Error: "User not found" });
    }
}

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email});
        if(!user){
            res.status(400).json({error:"User Not Found"})
            return
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            res.status(400).json({error:"Invalid Passowrd"});
            return;
        }
        const token=jwt.sign(
            {id:user._id,email:user.email},
            process.env.SECRET_KEY,
            {expiresIn:process.env.EXPIRES_IN}
        )

        res.status(200).json({message:"Login Successful",token:token,role:user.role})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}



module.exports = { registerUser, getUser,loginUser }