
const mongoose = require('mongoose');

 const rdetails = new mongoose.Schema({
    rt:String,
    college:String,
    Domain:String,
    prer:String,
    Description:String,
    College_year:String,
    slink:String,
    Name:String,
    Email:String,
    Phn:Number
  }); 
  const pd = mongoose.model('rdetail',rdetails);
  module.exports=pd;
  