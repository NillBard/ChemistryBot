const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  from: { type: String, required: true, unique: true },
  cards: [{ type: Types.ObjectId, ref: "TestCard" }],
});

module.exports = model("TestBlock", schema);
