const { Router } = require("express");

const {auth, admin} = require("../middleware/auth");

const router = Router();

//////////////////// Authentification Controllers ////////////////////
const AuthentificationControler = require("../controllers/AuthentificationControler");

router.post("/register", AuthentificationControler.register);

router.post("/login", AuthentificationControler.login);

router.post("/logout", auth, AuthentificationControler.logout);

//////////////////// Product Controllers ////////////////////
const ProductControler = require("../controllers/ProductControler");

router.get("/products", ProductControler.products);

router.get("/product/:id", ProductControler.product);

router.post("/product", auth, admin, ProductControler.create);

router.put("/product/:id", auth, admin, ProductControler.update);

router.delete("/product/:id", auth, admin, ProductControler.delete);

module.exports = router;


//////////////////// User Controllers ////////////////////

const UserControler = require("../controllers/UserControler");

router.get("/users", auth, admin, UserControler.users);

router.get("/user/:id", auth, UserControler.user);

router.put("/user/:id", auth, UserControler.update);

router.delete("/user/:id", auth, UserControler.delete);

module.exports = router;


//////////////////// category Controllers ////////////////////

const CategoryControler = require("../controllers/CategoryControler");

router.get("/categories", CategoryControler.categories);

router.get("/category/:id", CategoryControler.category);

router.post("/category", auth, admin, CategoryControler.create);

router.put("/category/:id", auth, admin, CategoryControler.update);

router.delete("/category/:id", auth, admin, CategoryControler.delete);

module.exports = router;


//////////////////// Order Controllers ////////////////////

const OrderControler = require("../controllers/OrderControler");

router.get("/orders", auth, OrderControler.orders);

router.get("/order/:id", auth, OrderControler.order);

router.post("/order", auth, OrderControler.create);

router.put("/order/:id", auth, OrderControler.update);

router.delete("/order/:id", auth, OrderControler.delete);

