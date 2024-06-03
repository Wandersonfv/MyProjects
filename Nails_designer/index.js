const { connect } = require('http2')
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('unhas.db')
const express = require('express')
const app = express()


app.use(express.urlencoded({extended:true}))
app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+'/Pages/Cadastro_cliente.html')
})


app.get('/preco',(req,resp)=>{
    resp.sendFile(__dirname+'/Pages/CadastrarPreços.html')

})

app.post('/enviar_preco',(req,resp)=>{
    const servico = req.body.servico
    const valor = req.body.valor
    const valor2 = valor.toString().replace(/(?!\d)(\d{2})/g, '$1,')

    console.log(`${servico} ${valor2}`)
})


app.post('/enviar',(req,res)=>{

    const nome_completo = req.body.nome_completo
    const estado = req.body.estado
    const cidade = req.body.cidade
    const bairro = req.body.bairro
    const endereco = req.body.endereco
    const data_nascimento = req.body.data_nascimento
    const telefone = req.body.telefone
    const cep = req.body.cep
    const email = req.body.email
    const profissao = req.body.profissao
    const estado_civil = req.body.estado_civil
    const dados = {nome_completo,estado,cidade,bairro,endereco,data_nascimento,telefone,cep,email,profissao,estado_civil}
    console.log(dados)

    db.all(`INSERT INTO Clientes (nome_completo, estado, cidade, bairro, endereco, data_nascimento, telefone, CEP, email, profissao, estado_civil)
    VALUES ('${nome_completo}', '${estado}', '${cidade}', '${bairro}', '${endereco}', ${data_nascimento}, ${telefone}, ${cep}, '${email}', '${profissao}', '${estado_civil}');`,(err,tabela)=>{
      if(err){
            console.error(err)
        }else{
            console.log("Dados envados com seucesso")
            console.log(tabela)
            tabela.map((linha)=>{
                console.log(linha)
            })
                        
        }}) 
    res.sendFile(__dirname+'/Pages/resposta.html')       
})


const porta = 3000
app.listen(porta,()=>console.log(`http://localhost:${porta}`))
