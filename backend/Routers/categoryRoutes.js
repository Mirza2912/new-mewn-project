const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../Controllers/categoryController");
const authMiddleware = require("../Middlewares/authMiddleware");
const adminMiddleware = require("../Middlewares/adminMiddleware");

// Route to create a new category
router.post("/create", authMiddleware, adminMiddleware, createCategory);

// Route to get all categories
router.get("/", getCategories);

// Route to get a single category by ID
router.get("/:id", getCategoryById);

// Route to update a category by ID
router.put("/:id", updateCategory);

// Route to delete a category by ID
router.delete(
  "/deleteCategory/:id",
  authMiddleware,
  adminMiddleware,
  deleteCategory
);

module.exports = router;
