const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clapSchema = new schema({
    country:{type:String,unique:true,required:true},
    claps:{type:Number,required:true},
    comments:[{type:String,required:true}],
},{
    versionKey:false
})

module.exports = mongoose.model['Claps'] || mongoose.model("Claps",clapSchema)