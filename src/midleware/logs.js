// berisi midleware

const logRequest = (req,res,next)=>{
    console.info('ini midleware', req.path)
    next()
}

module.exports=logRequest