const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://suraj:suraj_4321@cluster0-shard-00-00.qybgl.mongodb.net:27017,cluster0-shard-00-01.qybgl.mongodb.net:27017,cluster0-shard-00-02.qybgl.mongodb.net:27017/new_auth_sys?ssl=true&replicaSet=atlas-3tamaf-shard-0&authSource=admin&retryWrites=true&w=majority");
};
