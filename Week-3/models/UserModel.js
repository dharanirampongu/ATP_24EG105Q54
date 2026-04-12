import {Schema,model} from 'mongoose'

//create Cart Schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"//name of the product model
    },
    count:{
        type:Number,
        default:1
    },
})
//Create User Schema
const userSchema =new Schema({
    //structure of User resource
    username:{
        type:String,
        required: [true,"Username is required"],
        minLength: [4,"Min length of Username is 4 characters"],
        maxLength: [8,"Usename size exceed 8 chars"]
    },
    password:{
        type:String,
        required: [true,"Password required"]
    },
    email:{
        type:String,
        required: [true,"Email required"],
        unique: [true,"Email already existed"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema]
},{
    versionKey: false,
    timestamps: true,
},);
//Generate UserModel
export const UserModel=model("user",userSchema);
