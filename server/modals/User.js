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
  address: {
    type: String
  },
  number: {
    type: Number
  },
  orders: {
    type: Array
  }
});
//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
    console.log(email,password)
  const user = await User.findOne({ email })
  if (user === null) {
    return user;
  }
  if(password === user.password) {
    return user;
  }
};

const User = mongoose.model("Users", userSchema, "users");
module.exports = User