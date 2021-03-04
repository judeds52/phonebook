const mongoose= require('mongoose');

var createPhone = mongoose.model('createPhone',{  
    PhoneNum: Number,
    email: String,
    Name: String 
}); 

module.exports= createPhone;