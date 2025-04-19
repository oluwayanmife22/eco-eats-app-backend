const mongoose = require('mongoose');
const { Schema } = mongoose;

// Ingredient Schema
const ingredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }
});

// Comment Schema
const commentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true }
});

// More Info Schema
const moreSchema = new Schema({
  prep_time: { type: String, required: true },
  cook_time: { type: String, required: true },
  servings: { type: String, required: true },
  difficulty: { type: String, required: true },
  source: { type: String, required: true }
});

// Main Item Schema
const itemSchema = new Schema({
  menuId: { type: Number, required: true },
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  category: { type: String, required: true },
  instruction: { type: String, required: true },
  tags: [{ type: String }], // Ensuring tags is an array of strings
  ingredients: [ingredientSchema], // Directly embedding the schema
  comments: [commentSchema], // Directly embedding the schema
  more: moreSchema // Embedding the schema directly
});

// Fix: Prevent OverwriteModelError
module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);
