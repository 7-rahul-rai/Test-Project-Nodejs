var express = require("express");
var router = express.Router();
const itemController = require('../Controllers/itemController')

router.get("/", itemController.home);
router.get("/show", itemController.showItem);

router.post("/add-item", itemController.postItem);
// router.get("/delete/:id", expenseCtrl.deleteExpense);
router.get("/edit/:id", itemController.editItem);
router.post("/update/:id", itemController.updateItem);
router.get("/update1/:id", itemController.update1);
router.get("/update2/:id", itemController.update2);
router.get("/update3/:id", itemController.update3);

module.exports = router;
