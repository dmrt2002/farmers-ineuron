const Farmer = require("../modals/Farmer");
const User = require("../modals/User");
const cloudinary = require('../utils/cloudinary.js')

exports.registerUser = async (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
    User.create(
      {
        name: name,
        email: email,
        password: password,
      },
      async function (err, user) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(201).json(user);
        }
      }
    );
};

exports.userLogin = async (req, res) => {
  try {
    const email = req.body.uemail;
    const password = req.body.upassword;
    const admin = await User.findByCredentials(email, password);
    if (admin === null) {
      return res.status(401).json("Invalid Credentials");
    }
    res.status(200).json({ admin });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

exports.farmerLogin = async (req, res) => {
  try {
    const email = req.body.femail;
    const password = req.body.fpassword;
    const admin = await Farmer.findByCredentials(email, password);
    if (admin === null) {
      return res.status(401).json("Invalid Credentials");
    }
    res.status(200).json({ admin });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

exports.storeProducts = async(req,res) => {
  try {
    const product = req.body;
    let image = product.image
    const result = await cloudinary.uploader.upload(image,{
      folder:"images",
    })
    let userId = product.userId.userId
    let updated = await Farmer.findOneAndUpdate({
      _id: userId,
    } , {
      $push: {
        products: {
          title: product.title,
          type: product.type,
          price: product.price,
          image: {
            public_id:result.public_id,
            url:result.secure_url
          }
        }
      },
    });
    res.status(200).json(userId)
  }
  catch(e) {
    console.log(e)
  }
}