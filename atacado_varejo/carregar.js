const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'atacado_varejo'
})

connection.connect((err)=>{
    if(err){
        console.log('Falha no coneção')
    }
    console.log('Conectado com sucesso!')
})




connection.query('select * from classes',(err,resultado)=>{
    if(err){
        throw err
    }
    console.log('ID NOME')

    resultado.map((i)=>{
        console.log(i.id,i.nome)
    })


})

connection.end()