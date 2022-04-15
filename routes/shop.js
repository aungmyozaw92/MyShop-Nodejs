const express = require("express");

const homeController = require("../controllers/home");

const router = express.Router();

router.get("/", homeController.getIndex);
router.get("/products", homeController.getProducts);

module.exports = router;
