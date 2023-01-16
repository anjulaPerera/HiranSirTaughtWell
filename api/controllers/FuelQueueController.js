const { FuelQueue } = require("../models/FuelQueueModel");
const { FuelStation } = require("../models/FuelStationModel");
const mongoose = require("mongoose")

exports.addUsertoQueue = (req, res) => {
    const user_id = req.body.user_id;
    const shed_id = req.body.shed_id;
    const arrivalTime = new Date();

    const fuelQueue = new FuelQueue({
        user_id: user_id,
        shed_id: shed_id,
        arrivalTime: arrivalTime
    });

    fuelQueue.save((err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while adding user to queue",
                data: err
            });
        } else {
            FuelQueue.updateMany({shed_id:shed_id}, { $inc: { current_queueLen: 1 } },(err, doc) => {
                if (err) {
                    return res.status(422).json({
                        success: false,
                        message: "Error while updating queue length",
                        data: err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "Successfully added user to queue",
                        data: doc
                    });
                }
            });
        }
    });
};

exports.removeUserfromQueue = (req, res) => {
    const user_id = req.body.user_id;
    const shed_id = req.body.shed_id;

    FuelQueue.findOneAndDelete({ user_id: user_id, shed_id: shed_id }, (err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while removing user from queue",
                data: err
            });
        } else {
            FuelQueue.countDocuments({shed_id:shed_id},(err, count) => {
                if (err) {
                    return res.status(422).json({
                        success: false,
                        message: "Error while counting queue length",
                        data: err
                    });
                } else {
                    if(count > 0){
                        FuelQueue.updateMany({shed_id:shed_id}, { $inc: { current_queueLen: -1 } },(err, doc) => {
                            if (err) {
                                return res.status(422).json({
                                    success: false,
                                    message: "Error while updating queue length",
                                    data: err
                                });
                            } else {
                                return res.status(200).json({
                                    success: true,
                                    message: "Successfully removed user from queue",
                                    data: doc
                                });
                            }
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: "Successfully removed user from queue",
                            data: doc
                        });
                    }
                }
            });
        }
    });
};


exports.getAverageWaitingTime = (req, res) => {
    const shed_id = req.params.shed_id;
    FuelStation.findOne({_id:shed_id}, (err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while fetching fuel station details",
                data: err
            });
        } else {
            const avgTime_to_pump = doc.avgTime_to_pump;

            // get the current queue length from the FuelQueue model
            FuelQueue.countDocuments({ shed_id: shed_id }, (err, count) => {
                if (err) {
                    return res.status(422).json({
                        success: false,
                        message: "Error while fetching current queue length",
                        data: err
                    });
                } else {
                    // calculate the average waiting time
                    const averageWaitingTime = avgTime_to_pump * count;
                    return res.status(200).json({
                        success: true,
                        message: "Successfully calculated average waiting time",
                        data: averageWaitingTime
                    });
                }
            });
        }
    });
};

exports.updateQueueTimes = (req, res) => {
    const user_id = req.body.user_id;
    const shed_id = req.body.shed_id;
    const arrivalTime = req.body.arrivalTime;
    const departTime = req.body.departTime;

    FuelQueue.findOneAndUpdate(
        { user_id: user_id, shed_id: shed_id },
        { arrivalTime: arrivalTime, departTime: departTime },
        (err, doc) => {
            if (err) {
                return res.status(422).json({
                    success: false,
                    message: "Error while updating queue times",
                    data: err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Successfully updated queue times",
                    data: doc
                });
            }
        }
    );
}

exports.getQueueLengthByStation = (req, res) => {
    const shed_id = req.params.shed_id;

    FuelQueue.aggregate([
        { $match: { shed_id: mongoose.Types.ObjectId(shed_id) } },
        { $group: { _id: "$stationId", queueLength: { $sum: 1 } } }
    ], (err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Error while fetching queue length",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully fetched queue length",
                data: doc
            });
        }
    });
}




