import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createVariant = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const { name, sku, additionalCost, stockCount } = req.body;

    if (
      !name ||
      !sku ||
      additionalCost === undefined ||
      stockCount === undefined
    ) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields for the variant" });
    }

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const newVariant = {
      name,
      sku,
      additionalCost,
      stockCount,
    };

    existingProduct.variants.push(newVariant);
    const savedProduct = await existingProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateVariant = async (req, res) => {
  try {
    const productId = req.params.productId;
    const variantId = req.params.variantId;

    if (
      !mongoose.Types.ObjectId.isValid(productId) ||
      !mongoose.Types.ObjectId.isValid(variantId)
    ) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const updateFields = req.body;

    if (Object.keys(updateFields).length === 0) {
      return res
        .status(400)
        .json({ error: "Please provide at least one field to update" });
    }

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const existingVariant = existingProduct.variants.id(variantId);

    if (!existingVariant) {
      return res.status(404).json({ error: "Variant not found" });
    }

    for (const field in updateFields) {
      existingVariant[field] = updateFields[field];
    }

    const savedProduct = await existingProduct.save();

    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteVariant = async (req, res) => {
  try {
    const productId = req.params.productId;
    const variantId = req.params.variantId;

    if (
      !mongoose.Types.ObjectId.isValid(productId) ||
      !mongoose.Types.ObjectId.isValid(variantId)
    ) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    const variantIndex = existingProduct.variants.findIndex(
      (variant) => variant._id.toString() === variantId
    );

    if (variantIndex === -1) {
      return res.status(404).json({ error: "Variant not found" });
    }

    existingProduct.variants.splice(variantIndex, 1);

    const savedProduct = await existingProduct.save();

    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
