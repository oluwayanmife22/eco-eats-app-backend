const express = require('express');
const router = express.Router();

// ✅ Import controller functions correctly
const {
  getAllItems,
  getSearchedItems,
  getSingleItem
} = require("../controllers/itemController");

// ✅ Define routes using the imported functions
router.get("/all-items", getAllItems);
router.get("/items", getSearchedItems);
router.get("/items/:id", getSingleItem);

module.exports = router;
