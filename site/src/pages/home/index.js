import { Link } from "react-router-dom"
import { useState} from "react"
import { novoHeroi } from "../../api/hero";

export default function Index(){

    const [nome, setNome] = useState('');
    const [poder, setPoder] = useState('');
    const [voa, setVoa] = useState();

    async function salvarClick() {
        try {
            await novoHeroi (nome, poder, voa) 
            alert ('Heroi salvo')

        } catch (err) {
                alert(err.response.data.erro);
        }
    }

    return (
        <div>
            <h1>Cadastre um herói</h1>
            <div>
                <label>Nome</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <br/>
            <div>
                <label>Poder</label>
                <input type='text' value={poder} onChange={e => setPoder(e.target.value)}/>
            </div>
            <br/>
            <div>
                <label>Voa? 1 pra sim e 0 pra não</label><br/>
                <input type='text' value={voa} onChange={e => setVoa(e.target.value)}/>
            </div>
            <button onClick={salvarClick}>Guardar</button>
            <Link to='/contato'>Herois registrados</Link>
        </div>
    )
}