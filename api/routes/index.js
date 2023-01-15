const express =require('express') 
var router = express.Router()



require('./AuthRoutes')(router)

module.exports.router = router