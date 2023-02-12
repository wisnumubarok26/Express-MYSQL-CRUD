const pool = require(`../config/database`)

//modul query untuk GET
const getAllusers = ()=>{
    const sqlQuery="SELECT * from users"
    return pool.execute(sqlQuery)
}

//model QUERY untuk POST-CREATE
const createNewUser = (body)=>{
    const sqlQuery = `INSERT INTO users (nama,email,addres) VALUES ("${body.nama}","${body.email}","${body.addres}")`
    return pool.execute(sqlQuery)
}
//model QUERY untuk PATCH-UPDATE
const updateUser = (body,id)=>{
    const sqlQuery=`UPDATE users SET nama='${body.nama}',email='${body.email}',addres='${body.addres}' WHERE id=${id}`
    return pool.execute(sqlQuery)
}
//mpdelQUERY untuk delete - DELETE
const deleteUsers= (id)=>{
    const sqlQuery=`DELETE FROM users WHERE id=${id}`
    return pool.execute(sqlQuery)
}

module.exports={
    getAllusers,
    createNewUser,
    updateUser,
    deleteUsers
}