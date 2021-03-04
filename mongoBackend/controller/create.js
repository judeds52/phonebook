const express = require('express');
var router = express.Router();

var  createPhone  = require("../model/ContactInfo");

router.post('/',(req,res)=>{
    var info = new createPhone({
            PhoneNum: req.body.PhoneNum,
            email: req.body.email,
            Name: req.body.Name 
    })
    info.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("error");
        }
    })
})

module.exports=router;