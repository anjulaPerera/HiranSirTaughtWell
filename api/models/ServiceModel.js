const mongoose = require('mongoose')



let {Schema} = mongoose.Schema
const {ServiceTag} = require('./ServiceTagModel')


let ServiceModelSchema
 = new Schema(
    {
        title:{
            type: String,
            required : [true,'Title field is required'],

                },
            description:{
                type: String,
                required : [true,'Description field is required'],

                },
            image:{
                type: String,
                
                },
            service_tag:{
                type: mongoose.Schema.Types.ObjectId,
                ref:ServiceTag,
                required : [true,'Service tag field is required'],
 
                },
            price:{
                type: String,
                required : [true,'Price field is required'],
               
                },
            beautician:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Beautician',
                required : [true,'Beautician field is required'],
                },

            created_date :{
                type: DataTransfer,
                default: Date.now
                }
    }
    
)

// ServiceModelSchema.index({
//     title:'text',
//     description:'text'
// },{
//     weights :{
//         title:3,
//         description:5
//     }
// }
// )

const Service = mongoose.model('Service',ServiceModelSchema)
module.exports = {Service}