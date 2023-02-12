// midleware untuk upload file
const multer = require(`multer`)
const path = require(`path`)

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`public/images`) // folder untuk menyimpan file
    },
    filename:(req,file,cb)=>{
        const timestamp= new Date().getDate()
        const namaFile = file.originalname
        cb(null,`${timestamp}-${namaFile}`)
    }
})

const upload = multer({storage:storage})

module.exports=upload