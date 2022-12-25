const mongoose = require("mongoose")


const customerSchema =new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    phoneNumber : {
        type : String,
        unique: true,
        required: true
     },
     DOB : Date,
     emailId : String,
     address : {
        type: String,
        required: true
     },
     customerId : String,
     status : {
        type : String,
        enum : ["ACTIVE", "INACTIVE"]
     },
     isDeleted: {
      type: Boolean,
      default : false
     }
})

module.exports = mongoose.model("Customer", customerSchema)