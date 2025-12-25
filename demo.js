// import crypto from 'crypto'
// import { validatePaymentVerification} from "razorpay/dist/utils/razorpay-utils.js"
// const secreate ="5OndELRhmpTtPbBExeD3vtSo"

// const rezSigneture ='e4fef8f6c8b6584e3772032ee1c06a68714a28e72de5ffc0f8d2747470f1e9d9'

// // const verify =({razorpay_payment_id , razorpay_subscription_id})=>{
// //    const payload =`${razorpay_subscription_id}|${razorpay_payment_id}`
// // const mySign = crypto.createHmac("sha256",secreate).update(payload,"utf-8").digest("hex")
// //     console.log(mySign)
// // }

// //verify({razorpay_payment_id:'pay_Re2IaeQ4zWeaSr',razorpay_subscription_id:"sub_Re2Hkw6PWwX6HS"})


// const yo = validatePaymentVerification({subscription_id:'sub_Re2Hkw6PWwX6HS',payment_id:'pay_Re2IaeQ4zWeaSr'},rezSigneture,secreate)
// console.log(yo)


// import { MongoClient, ObjectId } from "mongodb"

 
// console.log(Config.MongoDB_URL)
// export const client = new MongoClient(Config.MongoDB_URL)

// export const connectDB = async () => {
//   await client.connect()

//   const db = client.db('Storage')
//   const user = db.collection('userDB')

//   const data = await user.find({}).toArray()
//   console.log(data)

//   await client.close()
// }

// ;(async () => {
//   await connectDB()
// })()



// import redisClient ,{ ConnectRedis } from "./DB/redisDB.js"

// try {
// await ConnectRedis()
// const userSession={name:"bossis", email:"boss@gmail.com", userId:"12345678"}
// await redisClient.json.set(`session:1234:5678`, "$" , userSession )
// console.log("done")
// } catch (error) {
//     console.log(error)
// }

// const sid ='YzI0ODlmNjZiZTBhY2JhNzJjYzhhM2FkZDg2YmNlZDc'
// const sid2 ='MGFmNDIwMmJjOTA4YjMwMThkYmQxOWU5YjQ4OWQ2NzA'
// const json = Buffer.from(sid, "base64").toString("utf-8")
//         console.log(json)


     const data ='{"sesID":"f7af1043cf14b6fae200dd9fd7b7c597","uid":"6937066de68b1c78aecae5b9"}'

     const r = Buffer.from(data,"utf-8").toString("base64url")
console.log(r)