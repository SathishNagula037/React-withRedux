import express from "express";
import { isAdmin, isAuth } from "../Middleware/Utill.js";

import multer, { diskStorage } from 'multer';
import { compareSync } from "bcrypt";
import Product from "../Modal/ProductModal.js";



const productRouter = express();



const uploadRouter = express.Router();

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`)
  }
});

const upload = multer({ storage })

productRouter.post('/createProduct', isAuth, (async (req, res) => {
  try {
    console.log(req.user)
    const product = new Product({
      name: req.body.name,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      GST: req.body.GST,
      User: req.user._id,
      productAvailable: req.body.productAvailable

    });
    const createdProduct = await product.save();
    console.log(createdProduct)
    res.status(201).send({ message: 'Product Created', product: createdProduct });
  }
  catch (error) {
    console.log(error)
  }
})

);

productRouter.get('/productList', (async (req, res) => {
  try {
    const productList = await Product.find({});
    console.log(productList)
    res.status(201).send({ message: "Products listed successfully..." , productList})

  } catch (error) {
    console.log(error)
  }

}))

  export default productRouter;




