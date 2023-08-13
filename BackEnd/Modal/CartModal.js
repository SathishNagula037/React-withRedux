import { ObjectId } from "mongodb";
import mongoose from "mongoose";


const cartSchema = mongoose.Schema({

    //User: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    productName: { type :String, required: true},
    productID:{ type: String, required: true},
    quantity: { type: Number, required: true},
    
    total: { type: Number}

})

const CartModal = mongoose.model('cart', cartSchema)

export default CartModal

