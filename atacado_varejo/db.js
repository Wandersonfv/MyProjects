const mysql = require('mysql')
const express = require('express')


const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})




app.post('/enviar',(req,res)=>{
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
        const nome = req.body
        const name = nome.name
         console.log(name)

    connection.query(`insert into classes(nome) values('${name}')`,(err,resultado)=>{
        if(err) throw err
        console.log('Dados inseridos com sucesso')
        connection.end()
    
    })
    })
    

    



})


const porta = 3000
app.listen(porta,()=>console.log(`Servidor rodando em http://localhost:${porta}`))





