const mongoose = require('mongoose');

const pdetails = new mongoose.Schema({
    ProjectName:String,
    college:String,
    Domain:String,
    Description:String,
    College_year:String,
    Github:String,
    Name:String,
    Email:String,
    Phn:Number
  });
  const rd = mongoose.model('pdetail',pdetails);

module.exports=rd;
  