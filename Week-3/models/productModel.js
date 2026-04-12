import { Schema,model } from "mongoose";
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

export const productModel=model("product",productSchema)