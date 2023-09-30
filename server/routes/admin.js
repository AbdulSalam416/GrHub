const router = require("express").Router();
const Admin = require("../models/Admin");
const Depositor = require("../models/Depositor");
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



async function generateUniqueVaultNumber() {
  const latestDepositor = await Depositor.findOne({}, {}, { sort: { 'createdAt': -1 } });
  if (latestDepositor) {
    // Extract the numeric part of the vault number and increment it
    const latestVaultNumber = parseInt(latestDepositor.vaultNumber.slice(3), 10);
    const newVaultNumber = `grh${(latestVaultNumber + 1).toString().padStart(4, '0')}`;
    return newVaultNumber;
  } else {
    // If no depositors exist yet, start with 'grh0001'
    return 'grh0001';
  }
}





router.post("/login", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });


    if (!admin) {
      res.status(401).json("admin does not exist");
    } else {
      const password = admin.password;

      if (req.body.password !== password) {
        res.status(401).json("wrong password");
      } else {
        // JWT payload with user information
        const payload = {
          id: admin._id,
          username: admin.username, 
        };

        console.log(payload);
        // JWT with a secret key and an expiration time
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "30d",
        });

        const { password, ...userInfo } = admin._doc;
        res.status(200).json({ ...userInfo, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json("Error Logging in");
  }
});

// Register
router.post("/new-admin", async (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    await newAdmin.save();
    res.status(201).json({ message: "Admin added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding Admin" });
  }
});

// Route to add a depositor
router.post("/add-depositor", async (req, res) => {
  try {
    const {
      username,
      password,
      fullName,
      dateOfBirth,
      email,
      country,
      nationality,
      sex,
      occupation,
      depositDate,
      address,
      itemName,
      weight,
      purity,
      carat,
      demurrageCharge,
      nextOfKin,
    } = req.body;

    const vaultNumber = await generateUniqueVaultNumber();


    const newDepositor = new Depositor({
      vaultNumber,
      password,
      fullName,
      username,
      dateOfBirth,
      email,
      country,
      nationality,
      sex,
      occupation,
      depositDate,
      address,
      itemName,
      weight,
      purity,
      carat,
      demurrageCharge,
      nextOfKin,
    });

    await newDepositor.save();
    res.status(201).json({ message: "Depositor added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding depositor" });
    console.log(error)
  }
});

// Route to view all users
router.get("/all-users", async (req, res) => {
  try {
    const allDepositors = await Depositor.find();
    res.status(200).json(allDepositors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
