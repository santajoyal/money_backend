const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transaction");
const app = express();
require("dotenv").config();

app.use(
  cors({
    orgin: "https://super-dodol-2ed71f.netlify.app",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes);
app.use("/api/transaction", transactionRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on 5000`)
);
