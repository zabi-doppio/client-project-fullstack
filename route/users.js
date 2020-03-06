import express from 'express';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';
const { check, validationResult } = require('express-validator');

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
        res.status(500).send('Server Error')
    }
})



// Logining the User

router.post('/login',[
    check('email','Please Include a Registered Email').isEmail(),
    check('password','Password is Required').exists()
],
async(req,res)=>{
    // Checking for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors:errors.array()
        })
    }
    const {email,password} = req.body;
    try {
        // Checking if User email Exists
        let user = await User.findOne({email});
        // If User email not found
        if (!user) {
            return res.status(400).json({msg:"Incorrect Credentials please try again"})
        }
        // Checking If User Password matches with Stored Password
        const isMatch = await bcrypt.compare(password,user.password);

        // if Password mismatch then following will occurs
        if (!isMatch) {
            return res.status(400).json({msg:"Try Again with Correct Credentails"})
        }

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,config.get('JwtSecret'),{
            expiresIn:360000
        },(err,token)=>{
            if (err) throw err;
            res.json({token});
        })

    } catch (error) {

res.status(500).send("Server Error")
    }
}
)

export default router;
