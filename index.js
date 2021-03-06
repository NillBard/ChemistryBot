const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/test", require("./routes/test.routes"));
app.use("/api/news", require("./routes/news.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Bot started on ${PORT}...`));
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}
start();
