const mongoose = require('mongoose')




let Schema = mongoose.Schema
let FuelQueueModelSchema
 = new Schema(
    {
    shed_id:{
            type: mongoose.Types.ObjectId, //should be able to get id from FuelStationModel
            required : [true,'Enter ShedID']
                },
    insurance_no:{
            type: String, //should be able to get id from FuelStationModel
            required:[true,'Insurance']
            },
            customerarrival_time:{
                type: Date,
                required:[true,"Customer arrival time is reuired"],
                //what should be added to get the arrival time of customer, customer should be able to update this
                },
    arrivalTime:{
        type:Date,
        required:true
    },
    departTime:{
        type:Date,
        required:true
    },
    enter:{
        type:Boolean,
        default : false
    },
    exit:{
                type : String,
                enum: Exit, 
                required : [true,'Did you pumped fuel before exitting?'],
                date : Date.now //example
                },
    current_queueLen: {
                type: Number,
                default:0,
                required: [true, 'Please enter length of current queue']
                },
    created_date :{
                type: Date,
                default: Date.now
                }
    }
    
)  

const FuelQueue = mongoose.model('FuelQueue',FuelQueueModelSchema
)
module.exports = {FuelQueue}