import express from "express";
import {
  createVariant,
  deleteVariant,
  updateVariant,
} from "../controllers/variant.controller.js";

const router = express.Router();

router.post("/products/create-variant/:productId", createVariant);
router.put("/products/update-variant/:productId/:variantId", updateVariant);
router.delete("/products/delete-variant/:productId/:variantId", deleteVariant);

export default router;
