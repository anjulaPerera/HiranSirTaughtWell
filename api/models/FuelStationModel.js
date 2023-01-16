const mongoose = require('mongoose')
const VehicleType = require('../enums/VehicleType')

let Schema = mongoose.Schema
let FuelStationModelSchema
 = new Schema(
    {
            shed_name: {
                type: String,
                required: [true, 'Name field is required']
            },
            shed_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'shed_id',
                // required: [true, 'Owner field is required']
            },
            city: {
                type: String,
                required: [true, 'Location field is required']
            },
            avgTime_to_pump: {
                type: Number,
                required: [true, 'Please enter average time taking to pump in minutes']
            },
            fuelArrivalTime: {
                type: Date
            },
            fuelFinishTime: {
                type: Date
            },
            fuelType: {
                type: String,
                enum : VehicleType
            },
            fuelStatus:{
                type : String
            }

        },
        {
            timestamps: true
        }
    
)  

const FuelStation = mongoose.model('FuelStation',FuelStationModelSchema
)
module.exports = {FuelStation}

// petrolStatus: {
            //     type: String,
            //     required: [true, 'Petrol Status field is required']
            // },
            // petrolArrivalTime: {
            //     type: Date,
            //     required: [false, 'Petrol Arrival Time field is required']
            // },
            // petrolFinishedTime: {
            //     type: Date,
            //     required: [false, 'Petrol Finished Time field is required']
            // },
            // dieselStatus: {
            //     type: String,
            //     required: [true, 'Diesel Status field is required']
            // },
            // dieselArrivalTime: {
            //     type: Date,
            //     required: [false, 'Diesel Arrival Time field is required']
            // },
            // dieselFinishedTime: {
            //     type: Date,
            //     required: [false, 'Diesel Finished Time field is required']
            // }