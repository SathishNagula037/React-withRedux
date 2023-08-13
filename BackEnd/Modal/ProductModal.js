import mongoose from "mongoose";

const productModal = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      User: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
      countInStock: { type: Number, required: true },
      rating: { type: Number, required: true },
      GST: { type: Number, required: true },
      productAvailable: { type:Boolean, required: true }

    },
    {
      timestamps: true,
    }
  );
  const Product = mongoose.model('Product', productModal);
  
  export default Product;

