const mongoose = require('mongoose')
const UserRole = require('../enums/UserRole')
let bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()



const SALT = 10
let Schema = mongoose.Schema
let ShedOwnerSchema
 = new Schema({
        shedOwner_id:{
                type: mongoose.Schema.Types.ObjectId,
                // required : [true,'Name field is required'],
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
                default : UserRole.STATION
                },
        phone_number:{
                type: String,
                required : false,
                },
        no_of_sheds_own:{
                type: Number,
                required : [true,'Please enter no of sheds you own'],
                        },
        created_date :{
                type: Date,
                default: Date.now
                            }


}


    
)  

ShedOwnerSchema.pre('save',function (next){
        var shedOwner = this
        if(shedOwner.isModified('password')){
            bcrypt.genSalt(SALT, function(err,salt){
                if(err) return next(err)
    
                bcrypt.hash(shedOwner.password, salt, function(err,hash){
                    if(err) return next(err)
                    shedOwner.password = hash
                    next()
                })
            })
        }else{
            next()
        }
    })
    
    ShedOwnerSchema.methods.comparePassword = function(candidatePassword, callback){
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) =>{
            if(err) return callback(err)
            callback(null, isMatch)
        });
    }
    
    
    ShedOwnerSchema.methods.generateToken = function(callBack){
        var shedOwner = this
        var token = jwt.sign(shedOwner._id.toHexString(),process.env.SECRETE)
    
        callBack(null, token)
    }
    
    //Validating token for auth routes middleware
    ShedOwnerSchema.statics.findByToken = function(token,callBack){
        jwt.verify(token, process.env.SECRETE,function(_err,decode){
    ShedOwner.findById(decode,function(err,user){
        if(err){
            res.json({status:false,data:'Invalid User ID'})
            // return  res.status(404).json({
            //     success :true,
            //     message:"Invalid User ID",
            //     data:err
            // })
        }
        callBack(null,ShedOwner)
    })
        })
        
    }
    
    const ShedOwner = mongoose.model('ShedOwner',ShedOwnerSchema)
    module.exports = { ShedOwner }