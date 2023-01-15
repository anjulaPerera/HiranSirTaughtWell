const mongoose = require('mongoose')



let Schema = mongoose.Schema
let CustomerModelSchema
 = new Schema(
    {
    insurance_no:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required : [true,'Insurance number is required']
        },
        vehicle_type:{
            type: String, // ? => customer should be able to select (petrol/diesel)
            required : [true,'Vehicle type is required']
                },
                currently_at:{
                    type: String, // ? => customer should be able to select a city
                    required : [true,'Current position is required']
                        },
    created_date :{
        type: Date,
        default: Date.now
        }
    }
    
)  

const Customer = mongoose.model('Customer',CustomerModelSchema
)
module.exports = {Customer}