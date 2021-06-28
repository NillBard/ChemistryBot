const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
  // rating: { type: String, default: "0" },
  // premium: { type: Boolean, default: false },
  // dailyQuest: { type: Boolean, default: false },
});

module.exports = model("User", schema);
