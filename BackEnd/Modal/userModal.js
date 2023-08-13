

import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      confirmPassword: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      isAvailable: { type: Boolean, }, // add this field
      //you can also add hobbies tags ["Cricket", "batman"]

      // isAdmin: {
      //   type: String,
      //   enum: ['superAdmin', 'admin'],
      //   default: 'admin',
      //   required: true,
      // },
      // images: { type: Array },

      // Notifications: [
      //   {
      //     _id: {   
      //       type: String,
      //       default: uuid,
      //     },
      //     status: {
      //       type: String
      //     },
      //   },
      //   { timestamps: true },
      // ],

      // Verfied: {
      //   type: Boolean,
      //   default: false,
      //   required: true,
      // },
      // // resume: {
      // //   type: String,
      // //   required: true,
      // // },
      // AppliedJobs: [
      //   {
      //     _id: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'Job',
            
      //     },
      //     status: {
      //       type: String,
      //       default: 'pending',
      //     },
      //   }
      // ],
    
      
      //now workexperiences id should pass
  
    },

    {
      timestamps: true,
    }
  );

  
  const User = mongoose.model('User', userSchema);
  export default User;
  