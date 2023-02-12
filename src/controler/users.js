//file berisi sebuah function untuk router / routing 
const ModelUser = require("../models/users")

//GET
const getAllusers = async (req,res)=>{
    //gunakan try catch untuk mencoba berhasil atau gagal
    try {
        const [data] = await ModelUser.getAllusers() //destructuring agar tidak ada field buffer pada respons
        res.json({
            msg:"get berhasil",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            msg:"server error",
            errorMsg : error
        })
    }
     
}
//POST
const createAllusers = async(req,res)=>{
    const body=req.body
    try {
        await ModelUser.createNewUser(body)
        res.json({
            msg:"Post Method",
            data : body
        })
    } catch (error) {
        res.status(500).json({
            msg:"server error",
            errorMsg : error
    })
}
}
//PATCH
const updateUser=async (req,res)=>{
    const {id}=req.params
    const {body}=req
    try {
        await ModelUser.updateUser(body,id)
        res.json({
            msg : "PATCH sukses",
            data : {
                id:id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            msg:"terjadi error",
            errorMsg : error
        })
    }
    
}
//DELETE
const deleteUsers = async (req,res)=>{
    const {id}=req.params
    try {
        await ModelUser.deleteUsers(id)
        res.json({
            id:req.params,
            msg:"Berhasil di DELETE"
        })
    } catch (error) {
        res.status(500).json({
            msg:"terjadi error",
            errorMsg : error
        })
    }
    
}

module.exports={
    createAllusers,
    getAllusers,
    updateUser,
    deleteUsers
}