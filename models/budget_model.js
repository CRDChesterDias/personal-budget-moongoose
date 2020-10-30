const mongoose = require("mongoose");
const mongodb_schema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        unique: true,
        validate: [valueValidate, 'Add a valid hex color code']
    }
}, {collection: 'all_budget_collection'})

function valueValidate(s){
    console.log(s.length)
    if(s.charAt(0) === '#'){
        if(s.length === 7)
            return true;
        else
            return false;
    }
    else    
        return false;

}

module.exports =  mongoose.model('all_budget_collection', mongodb_schema);