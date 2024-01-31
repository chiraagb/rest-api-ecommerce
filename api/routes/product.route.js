import express from "express";
import {
  create,
  read,
  update,
  deleteProduct,
  getProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create-products", create);
router.get("/read-products", read);
router.put("/update-product/:productId", update);
router.delete("/delete-product/:productId", deleteProduct);
router.get("/search-product", getProduct);

export default router;
