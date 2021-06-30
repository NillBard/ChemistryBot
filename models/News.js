const { Schema, model } = require("mongoose");

const schema = new Schema({
  header: { type: String, required: true },
  text: { type: String, required: true },
  newsId: [{ type: Types.ObjectId, ref: "NewsBlock" }],
  date: { type: Date, default: Date.now },
});

module.exports = model("News", schema);
