const express = require('express');
const router = express.Router();
const User = require('../models/Register.js');

router.post('/newuser', async (req, res) => {
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
    confirmpassword: req.body.cpassword,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    pincode: req.body.pincode,
  });

  try {
    const user = await newuser.save();
    res.send('user details recieved sucessfully');
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email: email,
      password: password,
    });

    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        _id: user._id,
      };
      res.send(temp);
    } else {
      return res.status(400).json({ message: error });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
