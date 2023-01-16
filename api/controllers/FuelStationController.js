const { FuelStation } = require("../models/FuelStationModel");
const mongoose = require('mongoose')

//OK
exports.addFuelStation = (req, res) => {
    const fuelStation = new FuelStation(req.body);

    fuelStation.save((err, _doc) => {
        if(err) {
            return res.status(422).json({
                success: false,
                message: "Error while Registering! Please try again",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Registerd!",
                // data: err
            });
        }
    });
}


//OK
exports.getFuelStationbyCity = (req, res) => {
    FuelStation.find({city:req.params.city}, (err, doc) => {
        
        if(err) {
            return res.status(422).json({
                success: false,
                message: "Error while fetching fuel stations",
                data: err
            }
            )
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully fetched the fuel station",
                data: doc
                
            })
            
        }
    })
}

//OK
exports.getAllFuelStations = (req, res) => {
    FuelStation.find({}, (err, doc) => {
        if(err) {
            return res.status(422).json({
                success: false,
                message: "Error while fetching fuel stations",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully fetched fuel stations",
                data: doc
            });
        }
    });
}




//------------------------------------------------------------------------------------------------------------------------

exports.updateFuelArrivalTime = (req, res) => {
    const shed_id = req.body.shed_id;
    const fuelArrivalTime = req.body.fuelArrivalTime;

    FuelStation.findOneAndUpdate(
        { _id: shed_id },
        { fuelArrivalTime: fuelArrivalTime },
        (err, doc) => {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Error while updating fuel arrival time",
                    data: err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Successfully updated fuel arrival time",
                    data: doc
                });
            }
        }
    );
}

exports.updateFuelFinishTime = (req, res) => {
    const shed_id = req.body.shed_id;
    const fuelFinishTime = req.body.fuelFinishTime;

    FuelStation.findOneAndUpdate(
        { _id: shed_id },
        { fuelFinishTime: fuelFinishTime },
        (err, doc) => {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Error while updating fuel finish time",
                    data: err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Successfully updated fuel finish time",
                    data: doc
                });
            }
        }
    );
}

exports.updateFuelType = (req, res) => {
    const shed_id = req.body.shed_id;
    const fuelType = req.body.fuelType;

    FuelStation.findOneAndUpdate(
        { _id: shed_id },
        { fuelType: fuelType },
        (err, doc) => {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Error while updating fuel type",
                    data: err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Successfully updated fuel type",
                    data: doc
                });
            }
        }
    );
}

exports.getFuelStatus = (req, res) => {
    const shed_id = req.params.shed_id;
    FuelStation.findOne({_id:shed_id}, (err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while fetching fuel status",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully fetched fuel status",
                data: doc
            });
        }
    });
};

// 

exports.addFuelStatusToFuelStation = (req, res) => {
    const shed_id = req.body.shed_id;
    const fuelStatus = req.body.fuelStatus;

    FuelStation.findByIdAndUpdate(shed_id, { fuelStatus }, { new: true }, (err, updatedFuelStation) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while updating fuel status",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully updated fuel status",
                data: updatedFuelStation
            });
        }
    });
}










// exports.updateFuelStatus = (req, res) => {
    //     const shed_id = req.params.shed_id;
    //     const newFuelStatus = req.body.fuelStatus;
    
    //     FuelStation.findOneAndUpdate({_id: shed_id}, { fuelstatus: newFuelStatus }, (err, doc) => {
    //         if (err) {
    //             return res.status(422).json({
    //                 success: false,
    //                 message: "Error while updating fuel status",
    //                 data: err
    //             });
    //         } else {
    //             return res.status(200).json({
    //                 success: true,
    //                 message: "Successfully updated fuel status",
    //                 data: doc
    //             });
    //         }
    //     });
    // };

