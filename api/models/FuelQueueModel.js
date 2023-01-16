const mongoose = require('mongoose')
const Enter = require('../enums/Enter')
const Exit = require('../enums/Exit')





let Schema = mongoose.Schema
let FuelQueueModelSchema
 = new Schema(
    {
    shed_id:{
            type: mongoose.Schema.Types.ObjectId, //should be able to get id from FuelStationModel
            required : [true,'Enter ShedID']
                },
    user_id:{
            type: mongoose.Schema.Types.ObjectId, //should be able to get id from FuelStationModel
            required:[true,'User Id']
            },
    arrivalTime:{
        type:Date,
        required:[true,'Enter Arrival time']
    },
    departTime:{
        type:Date,
        required:[true,'Enter Depart time']
    },
    enter:{
        type:Boolean,
        enum : Enter

    },
    exit:{
                type : String,
                enum: Exit, 
                // required : [true,'Did you pumped fuel before exitting?'],
                date : Date.now //example
                },
    current_queueLen: {
                type: Number,
                default:1,
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