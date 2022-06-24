import { useState, useEffect } from "react"
import { novoHeroi } from "../../../api/hero"


export default function Index () {

    try {
        async function salvarClick (nome, poder, voa) {
            const resposta = await novoHeroi (nome, poder, voa);
            alert('heroi salvo') 
        }
    } catch (err) {
        alert(err.data.message.error)
        
    }

    return(
        <div>
            <h1>fvreqave</h1>
        </div>
    )
}