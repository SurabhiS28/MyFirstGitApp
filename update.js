console.log("hiiii");

console.log("hiiii");

const express=require('express');
const router=express.Router();

router.get('/movies',(request,response)=>{
    console.log("hiiii");
    console.log("hiiii");
    response.send("added prod")
});

module.exports=router;
