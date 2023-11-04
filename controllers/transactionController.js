const Transactions = require("../models/transactionModel");

//createTransaction
module.exports.createTransaction = async (req, res, next) => {
  try {
    const { userId, type, title, amount } = req.body;
    const transaction = await Transactions.create({
      userId: userId,
      type: type,
      title: title,
      amount: amount,
    });

    if (transaction)
      return res.json({ msg: "Transaction created successfully." });
    else
      return res.json({ msg: "Failed to transaction create to the database" });
  } catch (ex) {
    next(ex);
  }
};

//getTransaction
module.exports.getTransaction = async (req, res, next) => {
  try {
    const transactions = await Transactions.find({
      userId: req.params.id,
    }).sort({
      updatedAt: 1,
    });
    res.json(transactions);
  } catch (ex) {
    next(ex);
  }
};

//updateTransaction
module.exports.editTransaction = async (req, res, next) => {
  try {
    const transactions = await Transactions.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (transactions) {
      res.status(200).json("transaction has been updated.");
    } else {
      res.status(404).json("You can update only your transcation!");
    }
  } catch (ex) {
    next(ex);
  }
};

//deleteTransaction
module.exports.deleteTransaction = async (req, res, next) => {
  try {
    const transactions = await Transactions.findByIdAndDelete(req.params.id);

    if (transactions) {
      res.status(200).json("transaction has been deleted.");
    } else {
      res.status(404).json("You can delete only your transcation!");
    }
  } catch (err) {
    next(err);
  }
};
