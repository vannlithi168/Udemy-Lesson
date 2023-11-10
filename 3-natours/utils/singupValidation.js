const { check } = require('express-validator');
const User = require('./../models/userModels');
const validator = require('validator');

const createSignupValidator = [
  check('firstName')
    .not()
    .isEmpty()
    .withMessage('First name cannot be empty.')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters.')
    .isAlpha()
    .withMessage('First name must contain only alphabetical characters.'),

  check('lastName')
    .not()
    .isEmpty()
    .withMessage('Last name cannot be empty.')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Last name must be at least 2 characters.')
    .isAlpha()
    .withMessage('Last name must contain only alphabetical characters.'),

  check('email')
    .not()
    .isEmpty()
    .trim()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) throw new Error('Email is already existed.');
    }),

  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is required.')
    .custom((value, { req }) => {
      const options = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
      };

      const isStrong = validator.isStrongPassword(value, options);

      if (!isStrong) {
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
          errors.push('Password must include at least one special character.');
        }

        if (errors.length > 0) {
          throw new Error(errors.join(' '));
        }
      }

      // Add more checks as needed
      return true;
    }),
];

module.exports = createSignupValidator;
