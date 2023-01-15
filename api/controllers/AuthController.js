const {User} = require('../models/UserModel')

exports.registerUser = (req,res) => {
    const user = new User(req.body)
    user.save((err,_doc)=>{
        if(err){
            return res.status(422).json({
                success : false,
                message : "Registration failed!",
                data:err
            })
        }else{
            return res.status(200).json({
                success : true,
                message : "Successfully Registered",
                // data:err
            })
        }
    })
}

exports.loginUser = (req,res) => {
    User.findOne(
    {email:req.body.email},
    (_err,user)=>{
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User email not found",
            })
        }else 
        {user.comparePassword(req.body.password,(_err,isMatch)=>{
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Password is incorrect",
                })
            }
            user.generateToken((err,token)=>{
                    if(err) {
                        return res.status(400).json({
                            success:false,
                            message:"Unable to generate jwt key",
                            data:err
                        })
                    }
                    return res.status(200).json({
                        success:true,
                        message:"Login successful",
                        data:{
                            "token":token
                        }
                    })
            })
            

        })}

        
    })
}

exports.getUserDetails = (req,res)=>{
    return  res.status(200).json({
        success :true,
        message:"User received",
        data:req.user
    })
}