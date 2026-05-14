import { Schema,model } from "mongoose";
// Create a product schema with the following fields: productId (number, required), productName (string, required), price (number, required, min value 10000, max value 50000), brand (string, required).
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"Product is required required"]
    },
    productName:{
        type:String,
        required:[true,"Product name is required"]
    },
    price:{
        type:Number,
        required:[true,"Product price is required"],
        min:[10000,"Min price is RS.10000"],
        max:[50000,"Max price is RS.50000"],
    },
    brand:{
        type:String,
        required:[true,"Product brand required"]
    }
});
// Create a product model using the product schema and export it.
export const productModel=model("product",productSchema)