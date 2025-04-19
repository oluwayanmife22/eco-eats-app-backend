const express = require('express');
const router = express.Router(); // ✅ Define router
const CategoryController = require('../controllers/categoryController');

// Define routes
router.get('/categories/:category', CategoryController.getCategory); 

module.exports = router; // ✅ Export router
