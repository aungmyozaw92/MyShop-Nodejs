const express = require("express");

const homeController = require("../controllers/home");
const cartController = require("../controllers/cart");
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get("/", homeController.getIndex);
router.get("/products", homeController.getProducts);

router.get('/cart', isAuth, cartController.getCart);

router.post('/cart', isAuth, cartController.postCart);

router.post('/cart-delete-item', isAuth, cartController.postCartDeleteProduct);

router.get('/checkout', isAuth, cartController.getCheckout);

router.get('/checkout/success', cartController.getCheckoutSuccess);

router.get('/checkout/cancel', cartController.getCheckout);

module.exports = router;
