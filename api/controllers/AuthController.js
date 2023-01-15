const {User} = require('../models/UserModel')

exports.registerUser = (req,res) => {
    const user = new User(req.body)
    user.save((err,doc)=>{
        if(err){
            return res.status(422).json({
                success : false,
                message : "Registration failed!",
                data:err
            })
        }else{
            return res.status(422).json({
                success : true,
                message : "Successfully Registered",
                // data:err
            })
        }
    })
}

exports.loginUser = (req,res) => {
    // const user = new User(req.body)
    User.findOne(
    {email:req.body.email},
    (err,user)=>{
        
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User email not found",
            })
        }

        user.comparePassword(req.body.password,(err,isMatch)=>{
        
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Password is incorrect",
                })
            }
            return res.status(200).json({
                success:false,
                message:"Login successful",
            })

        })
    })
}