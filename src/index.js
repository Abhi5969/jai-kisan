const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const newMW=require("../src/middlewares/commonMiddlewares")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Abhi_functionup:dBalIHuDvBLH2uZK@abhi1.m5k3ewv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use(newMW.assignmentMW)
app.use('/', route);


app.listen(process.env.PORT || 4040, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4040))
});