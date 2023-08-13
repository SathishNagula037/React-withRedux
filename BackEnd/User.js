import { isAdmin } from "./Middleware/Utill";
import express from express;


const app = express.Router()


app.post('/addingProduct' ,isAuth,isAdmin async (req, res) => {
    const { name, price, GST, discount }  = req.body
  
    const product = new Product({
        name,
        price,
        GST,
        discount
    })
    const saveProduct = await product.save()
    return res.status(201).send({ message: "Product saved successfully...", saveProduct}) 
  })

  const object = {
    name: "sathish",
    phone: 7013361690
  }
  console.log(`${object.name} hi ${object.phone}`)