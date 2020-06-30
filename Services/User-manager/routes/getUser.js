// Filename : getUser.js

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../db-model/User");

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */

router.get("/getUserDet", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });
 
  module.exports = router;