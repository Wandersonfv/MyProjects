const { connect } = require('http2')
const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('unhas.db')
const express = require('express')



db.all('SELECT * FROM Clientes;',(err,tabela)=>{
    if(err){
        console.log(err)

    }else{
        tabela.map((linha)=>{
            console.log(linha)
        })
    }




})