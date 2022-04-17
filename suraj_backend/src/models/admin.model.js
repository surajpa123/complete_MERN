const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")
const adminSchema = new mongoose.Schema(
  {
    TeacherData:{type:mongoose.Types.ObjectId,ref:"product",required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("admin",adminSchema)