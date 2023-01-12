const mongoose = require('mongoose')



let {Schema} = mongoose.Schema
let PaymentModelSchema
 = new Schema(
    {
    booking:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Booking',
    required : [true,'Booking field is required']
        },
    amount :{
    type: Number,
    required : [true,'Amount field is required']
        },
    status :{
    type: String,
    enum:['pending','Processed','completed','failed'],
    required : [true,'Status field is required']
        },
    created_date :{
    type: DataTransfer,
    default: Date.now
        }
    }
    
)  

const Payment = mongoose.model('Payment',PaymentModelSchema
)
module.exports = {Payment}