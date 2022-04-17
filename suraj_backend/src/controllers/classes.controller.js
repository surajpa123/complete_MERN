const express = require("express")
const Classes = require("../models/classes.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const classes=await Classes.create(req.body)
        return res.json({ status: 'ok', data: classes})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const classes=await Classes.find().lean().exec()
      
        return res.send(classes)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
