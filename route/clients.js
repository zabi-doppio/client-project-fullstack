import express from 'express';
const { check, validationResult } = require('express-validator');
const router = express.Router();


// Bringing Client Model
import Client from '../Model/Client.js';
import getClient from '../middleware/singleClient';

// Creating Client
// Routes Post api/clients
// Public Route

router.post('/'
,[
    check('companyName','Please Add Company Name').not()
    .isEmpty(),
    check('type','Enter the Type')
    .not()
    .isEmpty(),
    check('typePrice','Please Enter Price Type')
    .not()
    .isEmpty(),
    check('partitaIva',"Please Enter Partita Iva")
    .not()
    .isEmpty(),
    check('codiceFiscale','Please Enter Codice Fiscale')
    .not()
    .isEmpty(),
    check('name',"Please Enter Client Name")
    .not()
    .isEmpty(),
    check('surname',"Please Enter Client Surname").
    not()
    .isEmpty(),
    check('address',"Please Enter Address")
    .not()
    .isEmpty(),
    check('city',"Please Enter City")
    .not()
    .isEmpty(),
    check('zip',"Please Enter Zip")
    .not()
    .isEmpty(),
    check('state',"Please Enter State")
    .not()
    .isEmpty(),
    check('country',"Please Enter Country")
    .not()
    .isEmpty(),
    check('phone',"Please Enter Phone Number")
    .not()
    .isEmpty(),
    check('email',"Please Enter email Address")
    .not()
    .isEmpty(),
    check('domains',"Please Enter domains")
    .not()
    .isEmpty(),
    check('notes',"Please Enter Notes")
    .not()
    .isEmpty()
   

]
,
async(req,res)=>{
 // Check Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors:errors.array()
        })
    }
    const {
        companyName,
        type,
        typePrice,
        partitaIva,
        codiceFiscale,
        name,
        surname,
        address,
        city,
        zip,
        state,
        country,
        phone,
        email,
        domains,
        notes
    } = req.body;

    const client = new Client({
        companyName,
        type,
        typePrice,
        partitaIva,
        codiceFiscale,
        name,
        surname,
        address,
        city,
        zip,
        state,
        country,
        phone,
        email,
        domains,
        notes
    })
    try {
       
        console.log("client",client)
        const newClient =  await client.save();
        console.log("Newclient",newClient)
        res.status(201).send(newClient);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

// Getting all The Clients
router.get('/',async(req,res)=>{
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

// Get Single Client

router.get('/:id',getClient,(req,res)=>{
res.json(res.client);
})


// Updating Single Client
router.put("/:id",getClient,async(req,res)=>{
    try {
        const updatedClient = await res.client.set(req.body);
        res.json(updatedClient)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// Deleting Single Client
router.delete('/:id',getClient,async(req,res)=>{
    try {
        await res.client.deleteOne();
        res.json({message:"User has been Deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default router;