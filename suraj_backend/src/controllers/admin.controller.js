const express = require("express")
const Admin = require("../models/admin.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const admin= await Admin.create(req.body)
        return res.json({ status: 'ok', data: admin})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

// router.delete("",async(req,res)=>{
//     try {
//         const data = await model.findByIdAndDelete(req.params.id);
//         return res.send(data,"Deleted Sucessfully");
//       } catch (err) {
//         return res.status(500).send(err.message);
//       }
// })


router.get("",async(req,res)=>{
    try{
     
        const admin=await Admin.find().populate("class_id").lean().exec()
        return res.send(admin)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
