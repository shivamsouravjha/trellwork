const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schedulerSchema = new schema({
    eventName:{type:String,unique:true,required:true},
    eventDate:{type:Date,required:true},
    participants:[{type:String,required:true}],
},{
    versionKey:false
})

module.exports = mongoose.model['Schedule'] || mongoose.model("Schedule",schedulerSchema)