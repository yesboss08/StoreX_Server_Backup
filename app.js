import express from "express"
import cors from 'cors'
import CheeckAuth from "./middlewares/newAuth.js"
import directoryRouter from "./routes/directoryRoutes.js"
import fileRouter from "./routes/fileRoutes.js"
import userRouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import { ConnectRedis } from "./DB/redisDB.js"
import GoogleDriveRouter from "./routes/googleDrive.js"
import RazorpayRouter from './routes/razorpay.js'
import { Config } from "./utils/Config/config.js"
const redisClient = await ConnectRedis()


//connect with db
import "./Models/db.js"


const AloowedOrigin = [
    Config.AllowedClient1, Config.AllowedClient2
]

try {

const app = express()
const port = Config.PORT || 4000

app.use(cors({
    origin: function(origin , cb){
        if(!origin || AloowedOrigin.includes(origin)){
            cb(null , true)
        }else{
            cb(new Error("Not allowed by CORS"))
        }
    }, credentials:true
}))


// app.use(express.json())
app.use(express.json({
  verify: (req, res, buf) => {
    // store raw body as string (exact bytes Razorpay sent)
    req.rawBody = buf.toString('utf8');
  }
}));
app.use(cookieParser(Config.Cookie_Secreate))

  

app.use("/directory",CheeckAuth, directoryRouter)
app.use("/file",CheeckAuth, fileRouter)
app.use("/user",userRouter )
app.use("/drive", CheeckAuth,GoogleDriveRouter )
app.use("/razorpay",RazorpayRouter )


app.use((err, req, res, next) => {
  console.error(err.stack); // log for debugging
  res.status(err.status || 500).json({
    error: err.message || "something went wrong",
  });
});


app.listen(port, ()=>{
    console.log("listing at port 4000")
})

} catch (error) {
    console.log("error can not connect to db", error)
}



