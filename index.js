const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const rd=require("./models/Rsche")
const pd=require("./models/Psche")
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ResearchD');
app.get("/",function(req,res)
{
  res.render("landing")
})
app.get("/pform",function(req,res)
{
  res.render("projForm")
})
app.get("/rform",function(req,res)
{
  res.render("researchForm")
})
app.post("/psub",function(req,res)
{
  const det=new pd({
    ProjectName:req.body.project_title,
    college:req.body.college,
    Domain:req.body.domain,
    Description:req.body.proj_desc,
    College_year:req.body.college_year,
    Github:req.body.github,
    Name:req.body.name,
    Email:req.body.email,
    Phn:req.body.mobile
  })
  det.save();
  res.redirect("/");
})
app.get("/fproj",function(req,res)
{
  pd.find({},  function(err,d){
    res.render("findProj",{deta:d});
  })
})
app.get("/fres",function(req,res)
{
  rd.find({},  function(err,d){
    res.render("findResearch",{deta:d});
  })
})
app.post("/rsub",function(req,res)
{
  const ret=new rd({
    rt:req.body.research_title,
    prer:req.body.prev_research_exp,
    college:req.body.college,
    Domain:req.body.domain,
    Description:req.body.research_area_desc,
    College_year:req.body.college_year,
    slink:req.body.google_scholar,
    Name:req.body.name,
    Email:req.body.email,
    Phn:req.body.mobile
  })
  ret.save();
  res.redirect("/");
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
