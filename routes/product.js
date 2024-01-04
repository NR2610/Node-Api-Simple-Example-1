const express = require("express");

const router = express.Router();

const { getallproducts, getallproductstest } = require("../controllers/product");

router.route("/").get(getallproducts);
router.route("/testing").get(getallproductstest);

module.exports = router;
