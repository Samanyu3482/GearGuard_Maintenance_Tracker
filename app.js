


require("dotenv").config();

const db = require("./config/db");
const express = require("express");
const authRoutes = require("./routes/auth_route");

const cors = require("cors");


const app=express();







app.use(cors());
app.use(express.json());         
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);



app.get("/db-test", (req, res) => {
  db.query("SHOW TABLES", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

const { verifyToken } = require("./middleware/auth_middleware");

app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully ✅",
    user: req.user
  });
});

app.listen("8080", () => {
    console.log("app is listening at port 8080");
})