 
import { con } from './connection.js'

export async function inserirVilao(vilao){
    const comando = `
        INSERT INTO tb_vilao(nm_vilao, ds_maldades, bt_super_poder)
          VALUES (?, ?, ?)`

    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.super_poder])
    return resposta.affectedRows;
}

export async function listarVilao(){
    const comando = `
        SELECT id_vilao                 id,
               nm_vilao               nome,
               ds_maldades        maldades,
               bt_super_poder  super_poder
          FROM tb_vilao`;

    const [resposta] = await con.query(comando);
    return resposta;
}