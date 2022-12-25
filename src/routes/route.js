const express = require('express');
const router = express.Router();

const CustomerController = require("../controllers/CustomerControll")
const CardController = require("../controllers/cardControll")


router.post("/createCustomer",CustomerController.createCustomer)

router.get("/deleteCustomer", CustomerController.deleteCustomer)

router.get("/activeCustomer", CustomerController.activeCustomers)

router.post("/createCard", CardController.createCards)

router.get("/getCards", CardController.getCards)


module.exports = router;