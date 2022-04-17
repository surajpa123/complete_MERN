const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")
const classesSchema = new mongoose.Schema(
  {
    grade: { type: String, required: true },
    section: { type: String, required: true },
    subject: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("classes",classesSchema)