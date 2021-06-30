const { Router } = require("express");
const NewsBlock = require("../models/NewsBlock");
const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { header, text } = req.body;
    const newNews = new NewsBlock({ header: header, text: text });

    await newNews.save();
    res.status(201).json({ message: "Новость добавлена" });
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const news = await NewsBlock.find({ owner: req.newsBlock });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const news = await NewsBlock.findById(req.params.id);
//     res.json(news);
//   } catch (error) {
//     res.status(500).json({ message: "Something wrong" });
//   }
// });

module.exports = router;
