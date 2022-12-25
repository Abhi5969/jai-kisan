




const assignmentMW= function (req, res, next) {
    
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}

module.exports.assignmentMW= assignmentMW


