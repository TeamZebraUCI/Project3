const db = require("../models");
module.exports = {
    create: (req, res)=>{
        console.log("CREATE USER:");
        console.log(req);
        const user = {
            username: req.body.username,
            password: req.body.password,
        }
        console.log("UserCreated");
    },
    update: (req, res)=>{
        console.log("UPDATE USER:");
        console.log("--DO NOTHING");
        console.log(req);
    },
    remove: (req, res)=>{
        console.log("DELETE USER:");
        console.log("--DO NOTHING");
        console.log(req);
    },
    find: (req, res)=>{ 
        console.log("FIND USER");
        console.log("--DO NOTHING");
        console.log(req);
    }
};