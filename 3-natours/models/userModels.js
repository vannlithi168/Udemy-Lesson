const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us you email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the password is strong
        return validator.isStrongPassword(value);
      },
      message: 'Password must be strong and secure',
    },
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the confirm password matches the password
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
