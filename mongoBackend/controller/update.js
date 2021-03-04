const { ObjectID } = require('bson');
const express = require('express');
const { route } = require('./create');
var router = express.Router();

var  UpdatePhone  = require("../model/ContactInfo");

router.put('/:id',(req,res)=>{
   if(!ObjectID.isValid(req.params.id)){
       res.send("No Data with this ID found");
   }

    var newInfo = {
        PhoneNum: req.body.PhoneNum,
            email: req.body.email,
            Name: req.body.Name
    }
     
    UpdatePhone.findByIdAndUpdate(req.params.id,{$set: newInfo}, {new: true},(err,docs)=>{
        if(!err) {
            res.send(docs)
        }
        else{
            console.log("error");
        }
    })

})

module.exports=router;