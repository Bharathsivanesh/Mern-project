const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://bharath:bharathsivanesh@cluste.5phjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluste"
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Db connected");
});
connection.on("erroe", () => {
  console.log("Db error");
});
module.exports = mongoose;
