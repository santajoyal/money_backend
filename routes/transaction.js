const {
  createTransaction,
  getTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const router = require("express").Router();

router.post("/create/", createTransaction);
router.get("/get/:id", getTransaction);
router.put("/edit/:id", editTransaction);
router.delete("/delete/:id", deleteTransaction);

module.exports = router;
