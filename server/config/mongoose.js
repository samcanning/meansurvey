const mongoose = require('mongoose'),
fs = require('fs'),
path = require('path');
mongoose.connect('mongodb://localhost/beltexam');
const models = path.join(__dirname, './../models');
fs.readdirSync(models).forEach(function(file){
if(file.indexOf('.js') >= 0){
    require(models + '/' + file);
}
});