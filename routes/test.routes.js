const { Router } = require("express");
const TestCard = require("../models/TestCard");
const TestBlock = require("../models/TestBlock");
const router = Router();

router.post("/addQuestion", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    //////?????
    const block = await TestBlock.findById(req.params.id);
    res.json(block);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

router.get("/testCard", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

module.exports = router;
