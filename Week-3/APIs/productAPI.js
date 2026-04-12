// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)
// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId

//Create exp app()
import exp from 'express'
import { productModel } from '../models/productModel.js'
export const productApp=exp.Router();
//Define product routers
  //read all the products
  productApp.get("/products",async(req,res)=>{
  //read all products from db
  let productList=await productModel.find()
  //send res
  res.status(200).json({message:"products",payload:productList})
 });
  
  //read product by id
  productApp.get("/products/:id",async(req,res)=>{
  //read product id from req params
  const pid=req.params.id
  //find product by id
  const productObj=await productModel.findById(pid)
  if(!productObj){
     return res.status(200).json({message:"Product not found"})
  }
  //send res
  res.status(200).json({message:"product",payload:productObj})
 });

  //Create a product
  productApp.post("/products",async(req,res)=>{
    //get new product from req
    const newProduct=req.body
   //create new product Document
    const newProductDocument=new productModel(newProduct)
    //save
    const result=await newProductDocument.save();
    console.log("result:",result);
    //send res
    res.status(201).json({message:"Product Created"});
  });
   
   //Update product by id
   productApp.put('/products/:id',async(req,res)=>{
   const pid=req.params.id
   //modify product
   const modifiedProduct = req.body;
  const updatedProduct = await productModel.findByIdAndUpdate(pid,{ $set: modifiedProduct },{ new: true, runValidators: true });
    //send res
    res.status(200).json({message:"Product modified",payload:modifiedProduct});
   });
    
    //delete a product by id
    productApp.delete("/products/:id",async(req,res)=>{
    //get id from params
    const pid=req.params.id
    //find and delete product
    const deletedProduct=await productModel.findByIdAndDelete(pid,{new:true});
    if(!deletedProduct)
    {
       return res.status(404).json({message:"Product not found"})
    }
     //send res
     res.status(200).json({message:"Product removed",payload:deletedProduct})
    
   });