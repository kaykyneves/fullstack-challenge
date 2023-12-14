const express = require("express");

const { createUser } = require("./controller/UserController/cadUser.js");
const { cadPizza } = require("./controller/pizzasController/cadPizza.js");
const { loginUser } = require("./controller/UserController/loginUser.js");
const { showPizzas } = require("./controller/pizzasController/showPizzas.js");
const { verifyToken } = require("./middlewares/jwt.js");
const { createOrder } = require("./controller/orderController/orderPizza.js");
const { orderById } = require("./controller/orderController/orderById.js");
const { listOrder } = require("./controller/orderController/listOrder.js");
const route = express.Router();

route.post("/user", createUser);
route.post("/cadpizza", verifyToken, cadPizza);
route.post("/login", loginUser);
route.get("/listpizzas", verifyToken, showPizzas);
route.post("/createorder", verifyToken, createOrder);
route.get("/orderbyid/:id", verifyToken, orderById);
route.get('/listorder', verifyToken, listOrder);
module.exports = route;
