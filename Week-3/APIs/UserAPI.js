//Create express app
import exp from 'express'
import { config } from 'dotenv';
config();
import {UserModel} from '../models/UserModel.js'
import { hash,compare } from 'bcryptjs';
import { verifyToken } from '../middlewares/verifyToken.js';
import { signedCookie } from 'cookie-parser';
import jwt from 'jsonwebtoken';
const {sign}=jwt;
export const userApp=exp.Router()
userApp.use(exp.json())
//Define USER REST API Routes
   //user login
   userApp.post('/login',async (req,res) => {
    //get user creds obj from client
    const {email,password}=req.body;
    //verify email
    const user=await UserModel.findOne({email:email})
    if(!user){
      return res.status(404).json({message:"Invalid Email"})
    }
    const result=await compare (password,user.password)
    if(!result){
      return res.status(400).json({message:"Invalid password"})
    } 
    //if passwords matched
     //create token(jsonwebtoken -jwt--jaat)
     const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:1000})
    //store token as httpOnly cookie
    res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
    })
    //send res
    res.status(200).json({message:"login success",payload:user})
   });

    // create new user
    userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the pasword
    const hashedPassword=await hash(newUser.password,10);
    //replace plain password with hashed password
    newUser.password=hashedPassword;
    //create new User Document
    const newUserDocument=new UserModel(newUser)
    //save
    const result=await newUserDocument.save();
    console.log("result:",result);
    //send res
    res.status(201).json({message:"User Created"});
    });
    //read all  users
    userApp.get("/users",async(req,res)=>{
      //read all users from db
      let usersList=await UserModel.find()
      //send res
      res.status(200).json({message:"users",payload:usersList})
    });
    //read user by id
    userApp.get("/users/:id",verifyToken,async(req,res)=>{
      //read user email from req
      const emailOfUser=req.user?.email;
      //find user by id
      const userObj=await UserModel.findByIdAndUpdate({email:emailOfUser}).populate("cart.product")
      if(!userObj){
         return res.status(200).json({message:"User not found"})
      }
      //send res
      res.status(200).json({message:"user",payload:userObj})
    });

    //update a user by id
    userApp.put("/users/:id",async(req,res)=>{
    const uid=req.params.id;
    const modifiedUser=req.body;
    //get modified user from req
    const updatedUser=await UserModel.findByIdAndUpdate(
      uid,
      {$set:{...modifiedUser}},
      {new:true,runValidators:true});
      if(!updatedUser)
      {
         return res.status(404).json({message:"User not found"})
      }
    //send res
    res.status(200).json({message:"User modified",payload:modifiedUser});
    });

    //delete a user by id
    userApp.delete("/users/:id",async(req,res)=>{
      //get id from params
      const uid=req.params.id
      //find and delete user
      const deletedUser=await UserModel.findByIdAndDelete(uid,{new:true});
      if(!deletedUser)
      {
         return res.status(404).json({message:"User not found"})
      }
      //send res
      res.status(200).json({message:"User removed",payload:deletedUser})
    });

    // //add aproduct to cart
    // userApp.put('/users/cart/product-id/:pid', verifyToken, async(req,res)=>
    // {
    //   //get product id from url param
    //   let productId=req.params.pid;
    //   //get current details of user
    //   const emailOfUser=req.user?.email;
    //   //add product to cart
    //   let result = await UserModel.findByIdUpdate({ email: emailOfUser },{ $push: { cart: { product: productId } } },{ new: true, runValidators: true });
    //   //user invalid
    //   if(!result){
    //     return res.status(404).json({message:"User not found"})
    //   }
    //   res.status(200).json({message:"Product added to the cart"})
    // })

    //add product to cart
    userApp.put('/cart/product-id/:pid', async (req, res) => {
    try {
    //get product id from url param
    const productId = req.params.pid;
    //get current details of user
    const emailOfUser = req.user?.email;
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }
    // Find the user
    const user = await UserModel.findOne({ email: emailOfUser });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if product already exists in cart
    const existingItem = user.cart.find(item => item.product.toString() === productId);

    if (existingItem) {
      // Increment quantity
      existingItem.quantity += 1;
    } else {
      // Add new product with quantity = 1
      user.cart.push({ product: productId, quantity: 1 });
    }

    await user.save();

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});