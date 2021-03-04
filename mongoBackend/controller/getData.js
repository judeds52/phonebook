const express = require('express');
var router = express.Router();

var  createPhone  = require("../model/ContactInfo");

router.get('/',(req,res)=>{
    createPhone.find((err,docs)=>{
        if(!err) {
            res.send(docs)
        }
        else{
            console.log("error");
        }
    })
})


module.exports=router;