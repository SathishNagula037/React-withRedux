import User from "../Modal/UserModal.js";
import express from 'express'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { generateToken, isAdmin, refreshToken } from "../Middleware/Utill.js";
import bcrypt from 'bcrypt'

const userRouter  = express()


userRouter.post('/register', (async (req, res) => {
    try{
        console.log("hello")
        const { name, email, dateOfBirth, isAvailable, isAdmin, password, confirmPassword} = req.body
       
        const newUser = new User({
            name,
            email,
            password: bcrypt.hashSync(password, 8),
            confirmPassword: bcrypt.hashSync(confirmPassword, 8),
            dateOfBirth,
            isAdmin,
            isAvailable,
    
          })
          const saveUser = await newUser.save()
          const generate = generateToken(saveUser._id)
          const referesh = refreshToken(saveUser._id)

          res.status(201).send({ message: "User saved successfully...", saveUser})

    } catch(error){
       console.log(error)
    }
}))

userRouter.post(
    '/login',
    (async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

export default userRouter
