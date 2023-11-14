const User = require("../models/user");

// exports.signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         error: "Email is taken",
//       });
//     }

//     // Create a new user
//     const newUser = new User({ name, email, password });

//     // Save the new user
//     await newUser.save();

//     res.json({
//       message: "Signup success! Please signin!",
//     });
//   } catch (error) {
//     console.log("SIGNUP ERROR", error);
//     return res.status(400).json({
//       error: error.message,
//     });
//   }
// };

exports.signup = async (req, res) => {};
