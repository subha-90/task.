const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type:String},
  dob: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: {type:String},
  lastName: { type: String, required: true },
  aadhar: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, maxlength: 40, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;