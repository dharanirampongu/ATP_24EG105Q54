//Create HTTP Server
import exp, { Router } from 'express' //need not to specify the path when it is a module
const app=exp()// app name is used to special approach of express application . express application internally contains 

//use body parser middleware
app.use(exp.json())

//set a port number
const  port=3000;

//it is used to assign port number to HTTP Server
app.listen(port,()=>console.log(`server listening po port ${port}...`))

// //Test data(Replace this test data with DataBase)
// let users=[]

// //create API(REST-REpresentational State Transfer API)
// //API contains routes    (//Structure  of a route- app.METHOD(path,request handler))
 
//   //Route to handle GET req of Client(http://localhost:3000/users)
//   app.get('/users',(req,res)=>{
//     res.json({message:"all users",payload:users})
//     })
//   app.get('/user/:id',(req,res)=>{
//     let idOfUrl=Number(req.params.id)
//     let user=users.findIndex(user=>user.id===1)
//     if(user===-1)
//     {
//        return res.json({message:"User not found"})
//     }
//   })


//   //Route to handle POST req of Client
//   app.post('/users',(req,res)=>{
//     //get user from the client
//    const newUser=req.body
//    //push user into users
//    users.push(newUser)
//    //send res
//    res.json({message:"User created"})
//   })


//   //Route to handle PUT req of Client
//   app.put('/users',(req,res)=>{
//     //get modified user from client
//     let modifiedUser=req.body;
//     //get indx of existing userr in users array
//     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//     //if user not found
//     if(index===-1)
//     {
//         return res.json({message:"User not found"})
//     }
//     //update user with index
//     users.splice(index,1,modifiedUser)
//     //send res
//     res.json({message:"User Updated"})

//   })


//   //Route to handle DELETE req of Client
//   app.delete('/users/:id',(req,res)=>{
//     //get id of user from url parameter
//     let idOfUrl=Number(req.params.id)
//     //find index of user
//     let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//     //delete user by  index
//     users.splice(index,1)
//     //send res
//     res.json({message:"User removed"})
//   })

  //post and put request sends the 
  // get and delete method donot support body of the
  //end point=base url(it comes upto http server)+url path
  //use rest client for another request


  //Create product API with below operations
     //create new product({product id,name,brand,price})
     //read all product by brand
     //update a product
     //delete a product by id



  const products=[]

//get all product details
app.get('/products',(req,res)=>
{
    res.json({message:"All Product Details :",payload:products})
})

//get product details by brand
app.get('/products/:brand',(req,res)=>{
    //get brand from user 
    let brandByUrl=req.params.brand
    //find index of brand
    let index=products.findIndex(item=>item.brand==brandByUrl)
    //if product not found
    if(index==-1)
    {
        res.json({message:"Product is not available"})
    }
    //send request
    res.json({message:"Product Details:",payload:products[index]})
})

//creating products
  app.post('/products',(req,res)=>{
    //get new product from client
    let newProduct=req.body
    //add new product to products
    products.push(newProduct)
    //send request
    res.json({message:"Product created"})
  })

   //update product
  app.put('/products',(req,res)=>{
    //read modified product fron client
    let modifiedProduct=req.body
    //get existing product index from the products
    let index=products.findIndex(item=>item.productId===modifiedProduct.productId)
    //if product not found
     if(index==-1)
    {
        res.json({message:"Product is not available"})
    }
    //update product by index
    products.splice(index,1,modifiedProduct)
    //send response
    res.json({message:"Product updated!"})
  })

  //Delete product by Product Id
  app.delete('/products/:productId',(req,res)=>{
    //get product id from user
    let IdOfProduct=Number(req.params.productId)
    //find index of product
    let index=products.findIndex(item=>item.productId===IdOfProduct)
    //if product not found
    if(index===-1)
    {
      return res.json({message:"product not found to delete"})
    }
    //delete product by index
    products.splice(index,1)
    //send request
    res.json({message:"product deleted"})
  })

  