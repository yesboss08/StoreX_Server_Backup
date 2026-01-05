import express from 'express'
import { spawn } from "child_process";


const router = express.Router()

router.post("/", async(req,res,next)=>{
let childStream 
console.log(req.body)
const repoName = req.body.repository.name


if(repoName=="StoreX_Server_Backup") childStream = spawn(
  'bash',
  ['/home/ubuntu/Clinet_Bash.sh'],
  {
    env: {
      ...process.env,          // VERY IMPORTANT
      AWS_PROFILE: 'sanat08',  // your profile name
      AWS_REGION: 'ap-south-1' // optional but recommended
    }
  }
)

if(repoName=="StoreX_Client_Backup")childStream = spawn('bash', ["/home/ubuntu/Clinet_Bash.sh"])

//  const childStream = spawn('bash', ["/c/Users/Backend\ NODE-JS/section-21/15_Automating_Deployments_with_Bash_Scripting/demo.sh"])

childStream.stdout.on('data', data => {
  process.stdout.write(data); // mirror to terminal
});

childStream.on("close", code =>{
     console.log({code})
    if(code==0){
        console.log("process executed successfuly")
    }else{
        console.log("error while running the bash file")
    }
    return res.status(200).json({msg:"done executing the bash file"})
})

childStream.stderr.on("data",(chunk)=>{
    process.stderr.write(chunk)
})


childStream.on("error" , (err)=>{
    console.log("error while spwanign the bash file")
   return res.status(200).json({err:"error while executing the bash file"})
})


})

export default router