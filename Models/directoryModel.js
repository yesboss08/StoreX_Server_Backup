import  { model, Schema } from "mongoose";

const directorySchema = new Schema({
   name:{
    type:String, minLength:2, required:[true, "Name is required"] 
   },
   size:{
    type:Number, required:[true, "Name is required"] , default:0
   },
   userId:{
    type:Schema.Types.ObjectId, required:[true, "invalid user id"]
   },
   parent:{
    type:Schema.Types.ObjectId , default:null 
   },
   path:{
      type:[{type:Schema.Types.ObjectId ,ref:"directoryDB" }] , default:[]
   }
},{timestamps:true})

const directoryModel = model("directoryDB", directorySchema, "directoryDB")

export default directoryModel

