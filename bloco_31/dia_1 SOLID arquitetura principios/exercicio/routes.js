const express = require("express");
const pc = require("./controllers/plantController");

const plantController = new pc();

const router = express.Router();

//router.get("/plants");
// router.get("/plant/:id ",)
// router.delete("/plant/:id",)
// router.put("/plant/:id ",)
router.post("/plant", plantController.createPlant);
// router.get("/sunny/:id",)

module.exports = router;
