const express =require('express') 
var router = express.Router()


router.get('/',function(req,res){
    res.send('Welcome to api')
})

require('./AuthRoutes')(router)
// require('./BeauticianRoutes')(router)
// require('./CustomerRoutes')(router)

module.exports.router = router