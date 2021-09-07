const mongoose = require("mongoose");
const schema = mongoose.Schema;

const medalSchema = new schema({
    country:{type:String,unique:true,required:true},
    G_medal:{type:Number,required:true},
    S_medal:{type:Number,required:true},
    B_medal:{type:Number,required:true},
},{
    versionKey:false
})

module.exports = mongoose.model['Medal'] || mongoose.model("Medal",medalSchema)