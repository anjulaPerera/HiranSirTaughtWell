const mongoose = require('mongoose')



let {Schema} = mongoose.Schema
let ServiceTagModelSchema
 = new Schema(
    {
    tag:{
    type: mongoose.Types.ObjectId,
    required : [true,'Tag field is required']
        },
    created_date :{
        type: DataTransfer,
        default: Date.now
        }
    }
    
)  

const ServiceTag = mongoose.model('ServiceTag',ServiceTagModelSchema
)
module.exports = {ServiceTag}