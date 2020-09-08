const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    randomstring:{
        type:String,
        required:true
    },
   addresses:[{
       address:{
           type:String,
           required:false
       },
       pincode:{
           type:Number,
           required:false
       },
       state:{
           type:String,
           required:false
       }
   }]
})

module.exports = mongoose.model('User',UserSchema)

