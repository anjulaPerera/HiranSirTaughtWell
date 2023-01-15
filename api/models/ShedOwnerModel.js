const mongoose = require('mongoose')



let Schema = mongoose.Schema
let ShedOwnerModelSchema
 = new Schema({
        nic:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required : [true,'NIC number field is required'],
        created_date :{
        type: Date,
        default: Date.now
}}
} 
    
)  

const ShedOwner = mongoose.model('ShedOwner',ShedOwnerModelSchema
)
module.exports = {ShedOwner}