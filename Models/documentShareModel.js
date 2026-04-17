import mongoose from "mongoose";

const userDocumentShareSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId , required:true ,ref:"userDB", index:true
    }, 
    userName:{
        type:String, default:"new name"
    },
    sharedDirectory:{
        type:[documentAccessSchema ] , default:[]
    },
    sharedFiles:{
        type:[{document_id:{type:[mongoose.Schema.ObjectId], default:[]}, member_role:{type:String, default:'viewer',enum:"viewer" | "editor" }} ] , default:[]
    }

})

const documentAccessSchema = new mongoose.Schema({
   document_id:{
     type:mongoose.Schema.ObjectId, required:ture , index:true, ref:"directoryDB"
   }, 
   member_role:{ type:String, enum:"viewer" | "editor" }
},{_id:false, timeseries:false, timestamps:false})

const userDocumentShareCollection = mongoose.model("SharedDocuments", userDocumentShareSchema)

export default userDocumentShareCollection

