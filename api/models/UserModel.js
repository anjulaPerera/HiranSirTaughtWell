const mongoose = require('mongoose')
let bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRole = require('../enums/UserRole')
require('dotenv').config()
const VehicleType = require('../enums/VehicleType')


const SALT = 10
let Schema = mongoose.Schema
let UserSchema = new Schema(
    {
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        // required : [true,'Insurance number is required']
        },
    name:{
        type: String,
        required : [true,'Name field is required'],
        maxlength : 100,
        },
    email:{
        type: String,
        required : [true,'Email field is required'],
        unique: true
        },
    password:{
        type: String,
        required : [true,'Password field is required'],
        minlength:8
        },
    role:{
        type: String,
        // required : [true,'Role is required'],
        default: UserRole.CUSTOMER,
        },
    phone_number:{
        type: String,
        required : false,
        },
    
    vehicle_type:{
        type : String,
        enum: [VehicleType], 
        required : [true,'Vehicle type is required']
        },
    created_date :{
        type: Date,
        default: Date.now
        }
    }
    
)  

UserSchema.pre('save',function (next){
    var user = this
    if(user.isModified('password')){
        bcrypt.genSalt(SALT, function(err,salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err,hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
})

UserSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) =>{
        if(err) return callback(err)
        callback(null, isMatch)
    });
}


UserSchema.methods.generateToken = function(callBack){
    var user = this
    var token = jwt.sign(user._id.toHexString(),process.env.SECRETE)

    callBack(null, token)
}

//Validating token for auth routes middleware
UserSchema.statics.findByToken = function(token,callBack){
    jwt.verify(token, process.env.SECRETE,function(_err,decode){
User.findById(decode,function(err,user){
    if(err){
        res.json({status:false,data:'Invalid User ID'})
        // return  res.status(404).json({
        //     success :true,
        //     message:"Invalid User ID",
        //     data:err
        // })
    }
    callBack(null,user)
})
    })
    
}

const User = mongoose.model('User',UserSchema)
module.exports = { User }