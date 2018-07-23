const db = require("../models");
module.exports = {
    create: (req, res)=>{
        console.log("CREATE USER:");
        const newUser = {
            "username": req.body.username,
            "password": req.body.password
        };
        console.log(req.body);
    db.User.create(newUser)
        console.log("UserCreated");
    },
    update: (req, res)=>{
        console.log("UPDATE USER:");
        console.log("--DO NOTHING");
        console.log(req.body);
    },
    remove: (req, res)=>{
        console.log("DELETE USER:");
        console.log("--DO NOTHING");
        console.log(req.body);
    },
    find: (req, res)=>{ 
        console.log("FIND USER");
        console.log("--DO NOTHING");
        console.log(req.body);
    }
};