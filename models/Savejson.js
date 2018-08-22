var mongoose = require('mongoose');
var JsonSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    }
},{ strict: false });
var Savejson = module.exports= mongoose.model('Savejson',JsonSchema);
