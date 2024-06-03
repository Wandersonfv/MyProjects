import React from "react";

const TabelaBody = ({cont, handleRemove})=>{

    


    return(
        <>
        <tbody>
            {cont.map((livro,index)=>(
                <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                    <button 
                    className="BotoaRemover" 
                    onClick={()=>handleRemove(livro.id)}
                    id={livro.id}>Remover</button>
                </td>
                </tr>
            ))}
            
        </tbody>
        </>
        
    )
}

export default TabelaBody
