import {adicionar} from '../repository/heroRepository.js'
import { Router } from 'express'
const server=Router();

server.post('/heroi' , async (req, resp) => {
    try {
        const infoHero = req.body;
        const addHero = await adicionar (infoHero);
        resp.send.addHero;

    } catch (err) {
        resp.status(400).send({erro:err.message});
    }
})

export default server;