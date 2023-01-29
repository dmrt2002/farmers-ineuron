const Farmer = require("../modals/Farmer");
const User = require("../modals/User");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

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
          let token = jwt.sign({ admin }, "secret");
          res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: false,
            secure: true,
            path: "/",
            maxAge: 3600
          }))
          res.status(200).json({ token });
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
    let updated = await Farmer.findOneAndUpdate({
      _id: userId,
    } , {
      $push: {
        products: {
          title: product.title,
          type: product.type,
          price: product.price,
          image: product.image,
          farmerId: userId
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

exports.getOrdersByFarmer = async (req,res) => {
  let userId = jwt.decode(req.body.token)['admin']._id ;
  let data = await Farmer.find({ _id: userId });
  let orders = data[0].orders;
  res.status(200).json(orders)
}

exports.checkout = async (req,res) => {
  let data = req.body;
  Object.assign(data, { date: Date.now() })
  let userId = await User.findOne({ email: data.email })
  console.log(data.email)
  let updated = await User.findOneAndUpdate({
    _id: userId,
  } , {
    $push: {
        orders: data.cart
    },
  });
  let updatedtwo = await User.findOneAndUpdate({
    _id: userId,
  } ,
    {
        address: data.address
    },
  );
  for (let i = 0; i < data.cart.length; i++ ) {
    let updated = await Farmer.findOneAndUpdate({
      _id: data.cart[i].farmerId,
    } , {
      $push: {
        orders: {
          name: data.name,
          product: data.cart[i].title,
          email: data.email,
          address: data.address,
          price: data.price,
          date: data.date
        }
      },
    });
    res.status(200).json("done")
  }
}

exports.deleteProduct = async (req,res) => {
  let userId = req.body.farmerId;
  let farmer = await Farmer.findOne({ _id: userId }) ;
  let newProducts = farmer.products.filter((obj) => {
    return obj.title !== req.body.title
  })
  let updatedtwo = await Farmer.findOneAndUpdate({
    _id: userId,
  } ,
    {
        products: newProducts
    },
  );
  res.status(200)
}

exports.deleteOrder = async (req,res) => {
  let userId = jwt.decode(req.body.token)['admin']._id ;
  let farmer = await Farmer.findOne({ _id: userId })
  console.log(req.body.order.product)
  let orders = farmer.orders.filter((obj) => {
    return obj.product !== req.body.order.product && obj.email === req.body.order.email
  })
  let updatedtwo = await Farmer.findOneAndUpdate({
    _id: userId,
  } ,
    {
        orders: orders
    },
  );
  res.status(200).json("done")
}