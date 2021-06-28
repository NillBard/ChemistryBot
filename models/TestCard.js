const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  from: { type: Types.ObjectId, required: true, ref: "TestBlock" },
  question: { type: String, required: true, unique: true },
  answer: { type: String, required: true },
});

module.exports = model("TestCard", schema);
