const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/login", jsonParser, userController.farmerLogin);
router.post("/addproduct", jsonParser, userController.storeProducts);

module.exports = router;