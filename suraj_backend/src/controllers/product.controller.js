const express = require("express")
const Product=require("../models/user.product")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const product=await Product.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.patch("/:id", async (req,res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean()
        .exec();
        
        res.send(product);
    }
    catch(err){
        res.send(err.message);
    }

});




router.get("",async(req,res)=>{
    try{
        const product=await Product.find().populate("class_id").lean().exec()
        return res.send(product)
    }catch(err){
        return res.status(500).send(err.message)
    }
})



router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findOne({ id: req.params.id }).lean().exec();
  
      if (product) {
        return res.send(product);
      } else {
        return res.status(404).send({ message: "Teacher not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


module.exports=router
