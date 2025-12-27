require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth_route");
const equipmentRoutes = require("./routes/equipment_routes");
const requestRoutes = require("./routes/request_routes");

const { verifyToken } = require("./middleware/auth_middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/requests", requestRoutes);

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully ✅" });
});

app.listen(8080, () => {
  console.log("✅ app is listening at port 8080");
});
