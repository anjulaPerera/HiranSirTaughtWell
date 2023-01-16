const mongoose = require('mongoose')
const UserRole = require('../enums/UserRole')



let Schema = mongoose.Schema
let ShedOwnerModelSchema
 = new Schema({
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
                required : [true,'Role is required'],
                enum : UserRole,
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

const ShedOwner = mongoose.model('ShedOwner',ShedOwnerModelSchema
)
module.exports = {ShedOwner}