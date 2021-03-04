const mongoose= require('mongoose');
const express=require('express'); 


mongoose.connect('mongodb://localhost/contactInfo',{ useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('connected to mongodb');
}).on('error',function(){
    console.log('error');
})

module.exports=mongoose;
