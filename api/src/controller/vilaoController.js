import { Router } from "express";
import {listarVilao, inserirVilao} from "../repository/vilaoRepository.js";

const server = Router();
server.get('/vilao', async (req, resp) => {
    try{
        const resposta = await listarVilao();
          resp.send(resposta);
    }catch(error){
        resp.send({
            error: error.message
        });
    }
});

server.post('/vilao', async (req, resp) => {
    try {
        const vilao = req.body;
        const resposta = await inserirVilao(vilao);
        resp.send({
            x: resposta
        });
    }catch(error) {
        resp.send({
            error: error.message
        });
    }
});



export default server;