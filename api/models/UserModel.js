const mongoose = require('mongoose')
let bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRole = require('../enums/UserRole')
require('dotenv').config()

const SALT = 10
let Schema = mongoose.Schema
let UserSchema = new Schema(
    {
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
    username:{
        type: String,
        required : [true,'User Name field is required'],
        unique: true
        },
    password:{
        type: String,
        required : [true,'Password field is required'],
        minlength:8
        },
    role:{
        type: String,
        required : [true,'User Name field is required'],
        enum : UserRole,
        default: UserRole.CUSTOMER,
        },
    profile_image:{
        type: String,
        required : false,
        },
    phone_number:{
        type: String,
        required : false,
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

//For comparing entered password with database during login
UserSchema.methods.comparePassword = function(candidatePassword,callBack){
    bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
        if(err) return callBack(err)
        callBack(null,isMatch)
    })
}

//For generating token when logged in
UserSchema.methods.generateToken = function(callBack){
    var user = this
    var token = jwt.sign(user._id.toHexString(),process.env.SECRETE)

    callBack(null, token)
}

//Validating token for auth routes middleware
UserSchema.statics.findByToken = function(token,callBack){
    //This decode must give user_id if token is valid .ie decode=user_id
    User.findById(decode,function(err,user){
        if(err){
            res.json({status:false,data:'Invalid User ID'})
        }
        callBack(null,user)
    })
}

const User = mongoose.model('User',UserSchema)
module.exports = {User}