const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
  header: { type: String, required: true },
  text: { type: String, required: true },
  newsId: [{ type: Types.ObjectId, required: true, ref: "News" }],
});

module.exports = model("NewsBlock", schema);
