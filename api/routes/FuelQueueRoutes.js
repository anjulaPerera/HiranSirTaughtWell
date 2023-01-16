module.exports = function (app) {
    const FuelQueueController = require("../controllers/FuelQueueController");

        //====================----OKAY----======================
        app.post("/addusertoqueue:user_id/:shed_id", FuelQueueController.addUsertoQueue);


        //====================----OKAY----======================
        app.post("/removeuserfromqueue:user_id/:shed_id", FuelQueueController.removeUserfromQueue);


        //====================----OKAY----======================
        app.get("/waitingtime/:shed_id", FuelQueueController.getAverageWaitingTime);

        
        //====================----OKAY----======================
        app.get("/getqueuelength/:shed_id", FuelQueueController.getQueueLengthByStation);


        //=======OKAY, BUT DON'T KNOW WHAT IS THE USE OF THIS FUNCTION===========
        app.put("/queuetimes", FuelQueueController.updateQueueTimes);
    
       
    
        
    
    }