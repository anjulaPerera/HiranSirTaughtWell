module.exports = function(app){
const {Auth} = require('../middlewares/auth')
const AuthController = require('../controllers/AuthController')

    app.post('/register',AuthController.registerUser)
    app.post('/login',AuthController.loginUser)
    app.get('/userdetails',Auth,AuthController.getUserDetails)
}