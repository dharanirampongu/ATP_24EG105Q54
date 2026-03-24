//Create express app
import exp from 'express'
import {connect} from 'mongoose'
import { productApp } from './APIs/productAPI.js'
import { userApp } from './APIs/UserAPI.js'
// import { productApp } from './APIs/productAPI.js'
const app=exp();
app.use(exp.json());
//use user-api
app.use("/user-api",userApp)
// use product-api
app.use("/product-api",productApp)
//start server
app.listen(4000,()=>console.log("server on port 4000.."))

//connect  to DB server
const connectDB = async () => {
  try {
    console.log("DB_URL:", process.env.DB_URL); // debug
    await connect(process.env.DB_URL);
    console.log("DB connection successful");

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Error in DB connection:", err.message);
  }

}

connectDB();



app.use((err,req,res,next)=>
{
  res.status(500).json({error:err.message})
})
