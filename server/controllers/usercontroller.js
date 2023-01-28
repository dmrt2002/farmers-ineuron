const Farmer = require("../modals/Farmer");
const User = require("../modals/User");
const cloudinary = require('../utils/cloudinary.js');
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const { response } = require("express");

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
    let token = jwt.sign({ admin }, "secret");
    console.log(cookie);
    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: false,
      maxAge: 3600,
      secure: true,
      path: "/"
    }))
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
    let token = jwt.sign({ admin }, "secret");
    console.log(cookie);
    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: false,
      secure: true,
      path: "/",
      maxAge: 3600
    }))
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json("Incorrect Password");
  }
};

exports.storeProducts = async(req,res) => {
  try {
    const product = req.body;
    let image = product.image
    var decoded = jwt.decode(product.token);
    let userId = decoded['admin']._id
    const result = await cloudinary.uploader.upload(image,{
      folder:"images",
    })
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

exports.getProductById = async(req,res) => {
  try {
    const token = req.body.token;
    var decoded = jwt.decode(token);
    let userId = decoded['admin']._id
    let data = await Farmer.findOne({ _id: userId })
    res.status(200).json(data.products);
  }
  catch(e) {
    console.log(e)
  }
}

exports.getProducts = async (req,res) => {
  let data = await Farmer.find();
  let products = [];
  for (let i = 0; i < data.length ; i++) {
    for (let j = 0; j < data[i].products.length; j++) {
      products.push(data[i].products[j])
    }
  }
  res.status(200).json(products)
}