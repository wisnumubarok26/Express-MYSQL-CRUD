const express = require("express")
const routesUsers = require(`./routes/users.js`)
const midlewareLog = require(`./midleware/logs`)
const upload = require("./midleware/multer.js")
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

//midleware
app.use(midlewareLog)
app.use(express.json())
app.use(`/assets`,express.static(`public/images`)) // midleware untuk mengambil foto di folder public


//router
app.use("/users",routesUsers) // untuk crud users
app.post("/upload",upload.single(`photo`),(req,res)=>{ // untuk upload image(file)
    res.send("berhasil di upload")
})


app.listen(PORT,()=>{
    console.info(`server sedang berjalan di port ${PORT}`)
})