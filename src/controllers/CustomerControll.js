const CustomerModel = require("../models/customerModel")


//---------------------------Get all customers List with status ACTIVE [GET]-----------------------------------

const activeCustomers = async function (req, res) {
    let activeCustomers = await CustomerModel.find({ status: "ACTIVE" })
    res.send({ data: activeCustomers })
}

//---------------------------------delete customer. [DELETE]----------------------------------------------
const deleteCustomer = async function (req, res) {
    let customers = await CustomerModel.updateMany(
        { status: "INACTIVE" },
        { $set: { isDeleted: true } },
        { new: true }
    )
}

//. Create new customer [POST]----------------------------------------------------------------


const createCustomer = async function (req, res) {
    let data = req.body
    let phoneNumber = req.body.phoneNumber
    if(phoneNumber.length != 10){
        res.send({ data: "invalid mobile no"})
    }
        let createCustomer = await CustomerModel.create(data)
        res.send({ data: createCustomer})
}

module.exports.activeCustomers = activeCustomers
module.exports.deleteCustomer = deleteCustomer
module.exports.createCustomer = createCustomer