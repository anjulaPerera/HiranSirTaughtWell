const mongoose = require('mongoose')



let Schema = mongoose.Schema
let FuelStationModelSchema
 = new Schema(
    {
        shed_name:{
            type: String,
            required : [true,'Name field is required']
                },
    shed_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required : [true,'Shed Id field is required']
        },
    fuel_type:{
        type: String,
        required:false
        },
        fuelarrival_time:{
            type: Date,
            required:[true,"Fuel arrival time is reuired"],
            //what should be added to get the arrival time
            },
            city:{
                type: String,
                required:[true,"City time is reuired"],
                },
    created_date :{
        type: Date,
        default: Date.now
        }
    }
    
)  

const FuelStation = mongoose.model('FuelStation',FuelStationModelSchema
)
module.exports = {FuelStation}