import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import playerRoutes from './playersRoutes.js';
import Player from './playerModel.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//inizializando bd
mongoose.connect('mongodb://localhost/fifadb',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},
()=>console.log('conectado la BD!!'));
const db = mongoose.connection
//AQUI SOLO COPIO LA PAGINA QUE LE PASE POR PARAMETROS
db.once('open',async ()=>{
    if(await Player.countDocuments().exec() > 0){        
        return;    
    }          
        await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${1}`)
        .then(result=>{
           result.data.items.map(p=>{
               return Player.create({name:p.name,position:p.position,nation:p.nation.abbrName,team:p.club.name});
           })
        })   
})
/*
----ESTE SCRIPT ES PARA COPIAR TODAS LAS PAGINAS----
db.once('open',async ()=>{
    if(await Player.countDocuments().exec() > 0){
        
        return;    
    } 
    const promises =[];
    let count = 1;
    while(count<909){
        const promise = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${count}`)
        .then(result=>{
           result.data.items.map(p=>{
               return promises.push(Player.create({name:p.name,position:p.position,nation:p.nation.abbrName,team:p.club.name}));
           })
        })
        count+=1;
    }
    await Promise.all(promises);
})
*/



app.use('/api/v1',playerRoutes);



app.get('/api/v1',(req,res)=>{
    res.send('API FIFA test')
})



app.listen(5000,()=>{
    console.log('Api FIFA Online!')
});
