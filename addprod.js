const express=require('express');
const router=express.Router();

router.get('/movies',(request,response)=>{
    response.send("added prod")
});

module.exports=router;