const mongoose = require('mongoose')
const nodemon = require('nodemon')



let Schema = mongoose.Schema
let FuelQueueModelSchema
 = new Schema(
    {
        shed_id:{
            type: String, //should be able to get id from FuelStationModel
            required : true
                },
    insurance_no:{
        type: String, //should be able to get id from FuelStationModel
        required:true
        },
        customerarrival_time:{
            type: Date,
            required:[true,"Customer arrival time is reuired"],
            //what should be added to get the arrival time of customer, customer should be able to update this
            },
            exit_time:{
                type: Date,
                pumped: pumped ? yes:no,
                required:[true,"Customer exit time is reuired"],
                //what should be added to get the arrival time of customer, customer should be able to update this
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