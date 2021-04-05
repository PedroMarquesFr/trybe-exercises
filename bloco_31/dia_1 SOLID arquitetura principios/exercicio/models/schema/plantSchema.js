const mongoose = require("mongoose");
const { Schema } = mongoose;

const plantSchema = new Schema({
  breed: String, // String is shorthand for {breed: String}
  needsSun: Boolean,
  origin: String,
  size: Number,
  specialCare: [{ waterFrequency: Number }],
  lastEdited: Date,
});

module.exports = mongoose.model("plants", plantSchema);
