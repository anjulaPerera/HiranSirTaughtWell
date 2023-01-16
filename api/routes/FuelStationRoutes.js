module.exports = function (app) {
const FuelStationController = require("../controllers/FuelStationController");

    //add a fuel station ---------------------- OKAY
    app.post("/addfuelstation", FuelStationController.addFuelStation);

    //get all fuel stations ---------------------- OKAY
    app.get("/getallstations", FuelStationController.getAllFuelStations);

    //get station by city ---------------------- OKAY
    app.get("/single/:city", FuelStationController.getFuelStationbyCity);

    //====================----OKAY----======================
    app.put("/updatefuelarrival", FuelStationController.updateFuelArrivalTime)
   

    
//******************------------OKAY------------------********************
    app.put("/addstatus/:shed_d", FuelStationController.addFuelStatusToFuelStation);










//-----------------------------------------------------------------------------------------------------------------

    app.put("/updatefuelarrival", FuelStationController.updateFuelArrivalTime)
    app.post("/updatefuelfinish/:shed_id:/fuelFinishTime", FuelStationController.updateFuelFinishTime)
    app.post("/updatefueltype/:shed_id/:fuelType", FuelStationController.updateFuelType)
    app.get("/getfuelstatus/:shed_id", FuelStationController.getFuelStatus)
   


    

}