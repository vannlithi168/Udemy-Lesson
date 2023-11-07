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
    required: [true, 'Password is required'],
    select: false,
    validate: {
      validator: (value) => {
        const options = {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
          returnScore: false,
        };

        const isStrongPassword = validator.isStrongPassword(value, options);

        if (!isStrongPassword) {
          const errors = [];

          if (value.length < options.minLength) {
            errors.push('Password must be at least 8 characters long.');
          }

          if (!/[a-z]/.test(value)) {
            errors.push('Password must include at least one lowercase letter.');
          }

          if (!/[A-Z]/.test(value)) {
            errors.push('Password must include at least one uppercase letter.');
          }

          if (!/\d/.test(value)) {
            errors.push('Password must include at least one digit.');
          }

          if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            errors.push(
              'Password must include at least one special character.'
            );
          }

          if (errors.length > 0) {
            throw new Error(errors.join(' '));
          }
        }

        return true;
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
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
