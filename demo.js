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


//TEST: for child spawn executing the bash file
//  import {spawn} from "child_process"
//  import process from "process"

// const a =[1,2,3]

// const MODE = a.includes(2)

// const childStream = spawn('bash', ["bash.sh"],{
//      env: {
//     ...process.env,
//     MODE: MODE
//   }
// })


// childStream.stdout.on('data', data => {
//   process.stdout.write(data); // mirror to terminal
// });

// childStream.on("close", code =>{
//      console.log({code})
//     if(code==0){
//         console.log("process executed successfuly")
//     }else{
//         console.log("error while running the bash file")
//     }
// })

// childStream.stderr.on("data",(chunk)=>{
//     process.stderr.write(chunk)
// })


// childStream.on("error" , (err)=>{
//     console.log("error while spwanign the bash file")
// })


import crypto from 'crypto'
import { Config } from './utils/Config/Config.js'
const body ={
  "ref": "refs/heads/main",
  "before": "3573865afc8ae86db376264b710c506a15c6aaf5",
  "after": "2b93a63878fdbc34d9a4f7c5472e5859e9d2da0a",
  "repository": {
    "id": 1109777298,
    "node_id": "R_kgDOQiXbkg",
    "name": "StoreX_Server_Backup",
    "full_name": "yesboss08/StoreX_Server_Backup",
    "private": false,
    "owner": {
      "name": "yesboss08",
      "email": "yadav123sharma@gmail.com",
      "login": "yesboss08",
      "id": 178612140,
      "node_id": "U_kgDOCqVnrA",
      "avatar_url": "https://avatars.githubusercontent.com/u/178612140?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/yesboss08",
      "html_url": "https://github.com/yesboss08",
      "followers_url": "https://api.github.com/users/yesboss08/followers",
      "following_url": "https://api.github.com/users/yesboss08/following{/other_user}",
      "gists_url": "https://api.github.com/users/yesboss08/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/yesboss08/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/yesboss08/subscriptions",
      "organizations_url": "https://api.github.com/users/yesboss08/orgs",
      "repos_url": "https://api.github.com/users/yesboss08/repos",
      "events_url": "https://api.github.com/users/yesboss08/events{/privacy}",
      "received_events_url": "https://api.github.com/users/yesboss08/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/yesboss08/StoreX_Server_Backup",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup",
    "forks_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/forks",
    "keys_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/teams",
    "hooks_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/hooks",
    "issue_events_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/issues/events{/number}",
    "events_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/events",
    "assignees_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/assignees{/user}",
    "branches_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/branches{/branch}",
    "tags_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/tags",
    "blobs_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/languages",
    "stargazers_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/stargazers",
    "contributors_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/contributors",
    "subscribers_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/subscribers",
    "subscription_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/subscription",
    "commits_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/contents/{+path}",
    "compare_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/merges",
    "archive_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/downloads",
    "issues_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/issues{/number}",
    "pulls_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/labels{/name}",
    "releases_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/releases{/id}",
    "deployments_url": "https://api.github.com/repos/yesboss08/StoreX_Server_Backup/deployments",
    "created_at": 1764839655,
    "updated_at": "2026-01-08T14:49:09Z",
    "pushed_at": 1767884201,
    "git_url": "git://github.com/yesboss08/StoreX_Server_Backup.git",
    "ssh_url": "git@github.com:yesboss08/StoreX_Server_Backup.git",
    "clone_url": "https://github.com/yesboss08/StoreX_Server_Backup.git",
    "svn_url": "https://github.com/yesboss08/StoreX_Server_Backup",
    "homepage": null,
    "size": 105,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [

    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "stargazers": 0,
    "master_branch": "main"
  },
  "pusher": {
    "name": "yesboss08",
    "email": "yadav123sharma@gmail.com"
  },
  "sender": {
    "login": "yesboss08",
    "id": 178612140,
    "node_id": "U_kgDOCqVnrA",
    "avatar_url": "https://avatars.githubusercontent.com/u/178612140?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yesboss08",
    "html_url": "https://github.com/yesboss08",
    "followers_url": "https://api.github.com/users/yesboss08/followers",
    "following_url": "https://api.github.com/users/yesboss08/following{/other_user}",
    "gists_url": "https://api.github.com/users/yesboss08/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yesboss08/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yesboss08/subscriptions",
    "organizations_url": "https://api.github.com/users/yesboss08/orgs",
    "repos_url": "https://api.github.com/users/yesboss08/repos",
    "events_url": "https://api.github.com/users/yesboss08/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yesboss08/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  },
  "created": false,
  "deleted": false,
  "forced": false,
  "base_ref": null,
  "compare": "https://github.com/yesboss08/StoreX_Server_Backup/compare/3573865afc8a...2b93a63878fd",
  "commits": [
    {
      "id": "2b93a63878fdbc34d9a4f7c5472e5859e9d2da0a",
      "tree_id": "3ac91464dc2d5d0867d79328bec136b8b56ef0d8",
      "distinct": true,
      "message": "test chagned 1",
      "timestamp": "2026-01-08T20:26:35+05:30",
      "url": "https://github.com/yesboss08/StoreX_Server_Backup/commit/2b93a63878fdbc34d9a4f7c5472e5859e9d2da0a",
      "author": {
        "name": "sanatrath123",
        "email": "rathsanantakumar@gmail.com",
        "date": "2026-01-08T20:26:35+05:30",
        "username": "sanatrath123"
      },
      "committer": {
        "name": "sanatrath123",
        "email": "rathsanantakumar@gmail.com",
        "date": "2026-01-08T20:26:35+05:30",
        "username": "sanatrath123"
      },
      "added": [

      ],
      "removed": [

      ],
      "modified": [
        "app.js"
      ]
    }
  ],
  "head_commit": {
    "id": "2b93a63878fdbc34d9a4f7c5472e5859e9d2da0a",
    "tree_id": "3ac91464dc2d5d0867d79328bec136b8b56ef0d8",
    "distinct": true,
    "message": "test chagned 1",
    "timestamp": "2026-01-08T20:26:35+05:30",
    "url": "https://github.com/yesboss08/StoreX_Server_Backup/commit/2b93a63878fdbc34d9a4f7c5472e5859e9d2da0a",
    "author": {
      "name": "sanatrath123",
      "email": "rathsanantakumar@gmail.com",
      "date": "2026-01-08T20:26:35+05:30",
      "username": "sanatrath123"
    },
    "committer": {
      "name": "sanatrath123",
      "email": "rathsanantakumar@gmail.com",
      "date": "2026-01-08T20:26:35+05:30",
      "username": "sanatrath123"
    },
    "added": [

    ],
    "removed": [

    ],
    "modified": [
      "app.js"
    ]
  }
}

const sign = crypto.createHmac("sha256",Config.GIT_WEBHOOK_SCREATE).update(JSON.stringify(body)).digest("hex")
console.log(sign)