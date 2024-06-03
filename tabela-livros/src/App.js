import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";
import { useEffect, useState } from "react";



function App() {
  let [livraria, setLivraria] = useState([])
  
  

  useEffect(()=>{
    
    fetch('/api/livros.json')
    .then((resp)=> resp.json())
    .then((data)=> {
      setLivraria(data)
      console.log(livraria)
    
    })
    .catch(err => console.log(`Ouve um erro: ${err}`))
    .finally(()=> console.log('Retorno!'))

  },[])

  function handleRemoveLine(id){
    const livros = livraria.filter(l=>l.id !== id)
    setLivraria(livros)
    console.log('botão clicado!')
    console.log(livros)
  }


  
  




  return (
    <div className="tabela">
      
      <TabelaHead/>
      <TabelaBody 
      cont={livraria} 
      handleRemove={handleRemoveLine}/>
      <TabelaFoot qtd={livraria.length}/>

      
      
      
    </div>
  );
}

export default App;
