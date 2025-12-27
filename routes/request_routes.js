const express = require("express");
const router = express.Router();

const requestController = require("../controllers/request_controller");
const { verifyToken } = require("../middleware/auth_middleware");

router.post("/", verifyToken, requestController.createRequest);
router.get("/", verifyToken, requestController.getAllRequests);
router.patch("/:request_id/status", verifyToken, requestController.updateRequestStatus);
router.patch("/:request_id/assign", verifyToken, requestController.assignTechnician);

module.exports = router;
