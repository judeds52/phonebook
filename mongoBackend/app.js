const express = require('express');
const cors= require('cors');
const port=5050;
 
const mongoose = require('./db');
const  createContact = require('./controller/create');
const getContact = require('./controller/getData');
const UpdateContact=require('./controller/update');
const DeleteContact = require('./controller/delete');

var app = express();
app.use(express.json());
app.use(cors());

app.use('/',getContact);
app.use('/create',createContact);
app.use('/update',UpdateContact);
app.use('/delete',DeleteContact);

app.listen(port, ()=>{console.log(`Server running on port ${port}`)})