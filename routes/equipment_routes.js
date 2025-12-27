const express = require("express");
const router = express.Router();
const equipmentController = require("../controllers/equipment_controller");
const { verifyToken, allowRoles } = require("../middleware/auth_middleware");

router.post(
  "/",
  verifyToken,
  allowRoles("manager"),
  equipmentController.createEquipment
);

router.get("/", verifyToken, equipmentController.getAllEquipment);
router.get("/:id", verifyToken, equipmentController.getEquipmentById);

module.exports = router;
