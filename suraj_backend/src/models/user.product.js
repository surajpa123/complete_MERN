const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")
// const classes = require("./classes.model")

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    class_id:{type:mongoose.Types.ObjectId,ref:"classes"}
  },
  {
    versionKey: false,
    timestamps: true,
  },
);



module.exports=mongoose.model("product",productSchema)