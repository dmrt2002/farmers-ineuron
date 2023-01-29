const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/register", jsonParser, userController.registerUser);
router.post("/login", jsonParser, userController.userLogin);
router.post("/getproducts", jsonParser, userController.getProducts);
router.post("/checkout", jsonParser, userController.checkout);


module.exports = router;