const express = require("express");
const categoryRouter = express.Router();

const { authJWT } = require("../middleware/auth.js");
const {
  readCategory,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController.js");

categoryRouter.get("/category", readCategory);
categoryRouter.get("/category/:id", readCategoryById);

categoryRouter.post("/category", createCategory);
categoryRouter.put("/category/:id", updateCategory);

categoryRouter.delete("/category/:id", deleteCategory);

module.exports = categoryRouter;
