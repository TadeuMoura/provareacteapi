import { con } from './connection.js'

export async function adicionar (heroi){
    const comando= 
    `
    insert into tb_hero (nm_super_heroi, ds_super_poder, bt_voa)
    values ?, ?, ?
    `

    const [resposta]=await con.query (comando, [heroi.nome, heroi.poder, heroi.voa]);
    heroi.id=resposta.insertId;
    return heroi;}