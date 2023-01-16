module.exports = function (app) {
const FuelStationController = require("../controllers/FuelStationController");

    //add a fuel station
    app.post("/addfuelstation", FuelStationController.addFuelStation);

    //get all fuel stations
    app.get("/getallstations", FuelStationController.getAllFuelStations);

    //get station by city
    app.get("/single/:city", FuelStationController.getFuelStationbyCity);
   


    /*------------------check this--------------------------*/
    

    app.post("/addstatus/:id", FuelStationController.addFuelStatusToFuelStation);

    //-----------------------------------------------------------------------------------------------------------------

    app.post("/updatefuelarrival/:shed_id/:fuelArrivalTime", FuelStationController.updateFuelArrivalTime)
    app.post("/updatefuelfinish/:shed_id:/fuelFinishTime", FuelStationController.updateFuelFinishTime)
    app.post("/updatefueltype/:shed_id/:fuelType", FuelStationController.updateFuelType)
    app.get("/getfuelstatus/:shed_id", FuelStationController.getFuelStatus)
   


    

}