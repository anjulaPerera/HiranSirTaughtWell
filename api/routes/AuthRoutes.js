module.exports = function(app){
    // const {auth} = require('')

    const AuthController = require('../controllers/AuthController')
    app.post('/register',AuthController.registerUser)
    app.post('/login',AuthController.loginUser)
}