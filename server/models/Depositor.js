const mongoose = require("mongoose");

const depositorSchema = new mongoose.Schema({
  vaultNumber: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: false },
  email :{ type: String, required: false },
  country: { type: String, required: true },
  nationality: { type: String, required: false },
  sex: { type: String, required: true },
  occupation: { type: String, required: true },
  depositDate: { type: Date, required: false },
  address: { type: String, required: true },
  itemName: { type: String, required: true },
  weight: { type: Number, required: true },
  purity: { type: Number, required: true },
  carat: { type: Number, required: true },
  demurrageCharge: { type: Number, required: true },
  nextOfKin: { type: String, required: false },
});

const Depositor = mongoose.model("Depositor", depositorSchema);

module.exports = Depositor;
