import express from 'express'
import CartModal from '../Modal/CartModal.js'
import { isAuth } from '../Middleware/Utill.js';



const cartRouter = express.Router()


cartRouter.post('/addTocart',(req, res) => {

    //here i will create a modal
    const cart = new CartModal({
        productID: req.body.productID,
        quantity: req.body.quantity,
        
        
    })
    const isSaved = cart.save();
    return res.status(201).send({ message: "Product added to cart"})
})

cartRouter.get('/cart', async(req, res) => {
    try{
        const res1  = await CartModal.find({})
        return res.status(201).send({message: "cart fetched successfully...", res1}) 
    }catch(error){
        console.log(error)
    }

})


export default cartRouter;