const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true
    },
    cardType: String,
    customerName: String,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    vision: String,
    customerId: String

})

module.exports = mongoose.model("Card", cardSchema)