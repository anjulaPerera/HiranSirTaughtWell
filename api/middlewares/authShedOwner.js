const {ShedOwner} = require('../models/ShedOwnerModel')


const AuthShedOwner = (req,res,next)=> {
    let token = req.header('x-access-token')|| req.header("authorization")
    
    if(token){
        if(token.startsWith('Bearer')){
            token=token.slice(7,token.length)
        }
    
        ShedOwner.findByToken(token,(err,shedOwner)=>{
            if(err) throw err
            
            if(!shedOwner){
                return  res.status(400).json({
                    success :false,
                    message:"No valid token provided"
                })
            }

            req.token = token
            req.shedOwner = shedOwner

            next()
        })
    } else {
        return  res.status(400).json({
            success :false,
            message:"No valid token provided"
        })

    }
}


module.exports = {AuthShedOwner}