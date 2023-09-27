const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Depositor = require("../models/Depositor");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");

router.post("/login", async (req, res) => {
  try {
    const depositor = await Depositor.findOne({ username: req.body.username });

    if (!depositor) {
      res.status(401).json("depositor does not exist");
    } else {
      // const bytes = CryptoJS.AES.decrypt(
      //   Depositor.password,
      //   process.env.CRYPTOJS_SECRET_KEY
      // );
      // const originalPwd = bytes.toString(CryptoJS.enc.Utf8);


      if (req.body.password !== depositor.password) {
        res.status(401).json("wrong password");
      } else {
        // JWT payload with user information
        const payload = {
          userId: depositor._id,
          username: depositor.username, 
        };

        // JWT with a secret key and an expiration time
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "30d",
        });
        const { password, ...userInfo } = depositor._doc;
        res.status(200).json({ ...userInfo, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// View a specific depositor's profile (GET request)
router.get("/profile/:username", async (req, res) => {
  try {
    // Extract the username from the request parameters
    const username = req.params.username;
    // Find the depositor by username in the database
    const depositor = await Depositor.findOne({ username });

    if (!depositor) {
      return res.status(404).json({ error: "Depositor not found" });
    }

    // Return the depositor's profile information
    res.json(depositor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
