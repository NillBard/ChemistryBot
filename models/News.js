const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  from: { type: String, required: true, unique: true },
  newsblocks: [{ type: Types.ObjectId, ref: "NewsBlock" }],
});

module.exports = model("News", schema);
