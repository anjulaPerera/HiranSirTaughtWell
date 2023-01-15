const mongoose = require('mongoose')



let Schema = mongoose.Schema
let BeauticianModelSchema
 = new Schema(
    {
    user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required : [true,'User field is required']
        },
    business_license_number:{
        type: String,
        required:false
        },
    created_date :{
        type: Date,
        default: Date.now
        }
    }
    
)  

const Beautician = mongoose.model('Beautician',BeauticianModelSchema
)
module.exports = {Beautician}