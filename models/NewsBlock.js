const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  header: { type: String, required: true },
  text: { type: String, required: true },
  //newsId: [{ type: Types.ObjectId, required: true }],
  owner: { type: Types.ObjectId, ref: "News" },
  date: { type: Date, default: Date.now },
});

module.exports = model("NewsBlock", schema);
