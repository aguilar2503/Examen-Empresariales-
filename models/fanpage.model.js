const mongoose = require('mongoose');

let fanPageSchema = new mongoose.Schema({
    tittle: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: false
    },
    keywords: [
        {
            type:String,
            required: false
        }
    ],
    coments:[
        {
            type:String,
            required: false
        }
    ],
    calificacion:[{
        type:Number,
        required:true
    }]
});

const fanPageModel = mongoose.model('FanPage', fanPageSchema, 'fanPage');

module.exports = fanPageModel;