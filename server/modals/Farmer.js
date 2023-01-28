const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  products: {
    type: Array
  },
  orders: {
    type: Array
  }
});
//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
    console.log(email,password)
  const user = await Farmer.findOne({ email })
  if (user === null) {
    return user;
  }
  if(password === user.password) {
    return user;
  }
};

const Farmer = mongoose.model("Farmers", userSchema, "farmers");
module.exports = Farmer