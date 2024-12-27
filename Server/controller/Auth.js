const User = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken');
const { use } = require('react');
require('dotenv').config();

exports.signup = async(req,res) =>{
    try{
        const {name,email,password,CNpassword} = req.body;
        if(!name || !email || !password || !CNpassword){
            return res.status(403).json({
                success:false,
                message:"All Field Are required",
            })
        }
        if (password !== CNpassword) {
            return res.status(403).json({
                success: false,
                message: "Password and Confirm Password are not Same",
            })
        }
        const existingData = await User.findOne({email});
        if(existingData){
            return res.status.json({
                success:false,
                message:"Somthing is Wrong",
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        })
        return res.status(200).json({
            success: true,
            message: "Admin is Registered Successfully",
            data:user,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Somthing is wrong",
        })
    }
}

exports.login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"All Field are required",
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message: "User is not registerd, Please signup first",
            })
        }
        if(await bcrypt.compare(password,user.password)){
            const paylod = {
                email:user.email,
                id:user._id,
                name:user.name,
            }
            const token = jwt.sign(paylod,process.env.JWT_SECRET,{
                expiresIn:"2h",
            })
            user.token = token;
            user.password=undefined;

            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in successfully"
            })
        }else{
            return res.status(401).json({
                success:false,
                message:"Password is Incorrect",
            })
        }
    }
    catch(error){
        console.log("Error is ",error)
        return res.status(500).json({
            success:false,
            error,
            message:"Somging is Wrong",
        })
    }
}