import express from 'express';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';
import {check} from 'express-validator/check';
import {validationResult} from 'express-validator';

const router = express.Router();

// bring User model 
import User from '../Model/User.js';
// Registering a User
// Routes Post api/users
// Public Route

router.post('/',[
    check('name','Please Add Name')
    .not()
    .isEmpty(),
    check('email','Please a Valid Email Address')
    .isEmail(),
    check('password','Please Enter a Password more than 8 digits')
    .isLength({min:8})
],
async(req,res)=>{
    // Checking for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors:errors.array()
        })
    }
    // Getting Credentials from Request Body
    const {name,email,password}=req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                msg:"User already exists with this email"
            })
        }
// Creating new User
        user = new User({
name,
email,
password
        })
        // encrypting The User Password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();
        res.send(user)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

export default router;
