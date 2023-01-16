const express =require('express') 
var router = express.Router()



require('./AuthRoutes')(router)
require('./FuelStationRoutes')(router)
require('./FuelQueueRoutes')(router)

module.exports.router = router