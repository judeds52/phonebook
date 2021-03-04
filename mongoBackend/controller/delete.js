const { ObjectID } = require('bson');
const express = require('express');
var router = express.Router();

var  DeletePhone  = require("../model/ContactInfo");

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        res.send("No Data with this ID found");
    }

    DeletePhone.findByIdAndRemove(req.params.id, (err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("error");
        }
    })

 
})
module.exports=router;