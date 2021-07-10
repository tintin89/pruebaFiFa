import express from 'express';
import * as playerCtrl from './playerCtrl.js';
import {verifica} from './utility.js';


const playerRoutes = express.Router();

playerRoutes.get('/',verifica,playerCtrl.getAllPLayers);

playerRoutes.get('/:id',verifica,playerCtrl.getPlayerById);

playerRoutes.post('/team',verifica,playerCtrl.getPLayersByTeam);

playerRoutes.get('/players',verifica,playerCtrl.getPLayerByString);


export default playerRoutes;