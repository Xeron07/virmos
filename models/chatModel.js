const mongoose=require('mongoose');
const {Schema} = mongoose;

const chatSchema=new Schema({
    roomId:{type:String,default:new Date()},
    last_update:{type:Date,default:new Date()},
    chat_record:{
        user_id:String,
        user_name:{type:String, default:'anonymous'},
        img:{type:String,default:"default_avt.png"},
        msg:String,
        dateTime:{type:Date,default:new Date()}
    }
});

module.exports = mongoose.model("chats",chatSchema);