module.exports = function (app) {
    const FuelQueueController = require("../controllers/FuelQueueController");
    


        app.post("/queuetimes:insurance_no/:shed_id/:arrivalTime/:finishTime", FuelQueueController.updateQueueTimes);
        app.post("/addusertoqueue:insurance_no/:shed_id", FuelQueueController.addUsertoQueue);





        app.get("/waitingtime/:shed_id", FuelQueueController.getAverageWaitingTime);
        app.get("/getqueuelength/:shed_id", FuelQueueController.getQueueLengthByStation);

    
       
    
        
    
    }