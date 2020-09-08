const express = require('express')
const router = express.Router()
const User = require('../model/User')
const cryptoRandomString = require('crypto-random-string');
var CryptoJS = require("crypto-js");

// route to add data
router.post('/addata',
async(req,res)=>{
    const {name,email} = req.body
    var str = cryptoRandomString({length: 10});
    let user = new User({
        name,
        email,
        randomstring:str
    })
    user = await user.save()
    res.json(user)
})

// route to fetch data 
router.get('/getdata',
async(req,res)=>{
    const getdata = await User.find()
    res.json(getdata)
})

// route to delete data
router.delete('/deletedata',
async(req,res)=>{
    const data = await User.findByIdAndRemove(req.body.id)
    res.json(data)
})

// route to update data
router.put('/updatedata',
async(req,res)=>{
    const {id, address, pincode,state} = req.body
    const data = await User.findByIdAndUpdate(id,{$push:{"addresses": {address:address,pincode:pincode,state:state}}},{new:true})
    res.json(data)
})


// encrypt & decrypt data 
router.post('/encrypt',
async(req,res)=>{
    // encryption
    var ciphertext = CryptoJS.AES.encrypt('shreyashdeshmukh', 'secret key 123').toString();
    console.log(ciphertext)
    // decryption
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText); 
})

module.exports = router



