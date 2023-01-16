module.exports = function(app){
const { AuthShedOwner } = require('../middlewares/authShedOwner')
const {AuthUser} = require('../middlewares/authUser')
const AuthController = require('../controllers/AuthController')

    //OKAY
    app.post('/registeruser',AuthController.registerUser)

    //OKAY
    app.post('/loginuser',AuthController.loginUser)

    //OKAY
    app.post('/registershedowner',AuthController.registerShedOwner)

    //OKAY
    app.post('/loginshedowner',AuthController.loginShedOwner)

    //OKAY
    app.get('/userdetails',AuthUser,AuthController.getUserDetails)

    //OKAY BUT TOKEN NOT RETURNING
    app.get('/shedownerdetails',AuthShedOwner,AuthController.getShedOwnerDetails)
}