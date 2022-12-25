let CardModel = require("../models/cardModel")

//*****************************************Get all Card List[GET]****************************************


const getCards = async function(req, res){
    let allCards = await CardModel.find()
    res.send({data: allCards})
} 

//*****************************************Create new card [POST]****************************************


const createCards = async function(req, res){
    let data = req.body
    let createCards = await CardModel.create(data)
    res.send({data: createCards})
}

module.exports.getCards = getCards
module.exports.createCards= createCards