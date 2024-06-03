import React from "react";

const TabelaFoot = ({qtd})=>{
    return(
        <tfoot>
            <tr>
                <td colSpan='4'>A quantidade de livros é igual a {qtd}.</td>
            </tr>
        </tfoot>
    )
}


export default  TabelaFoot