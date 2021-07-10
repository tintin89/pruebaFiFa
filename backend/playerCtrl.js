import Player from "./playerModel.js";



export const getAllPLayers = async (req,res)=>{
    try{
        const players = await Player.find();
        res.send(players)

    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

export const getPlayerById = async (req,res)=>{
    const {id} = req.params;
    try{
     const player = await Player.findById(id)
     if(player){
       res.send(player);
     }else{
        res.status(400).json({message:"No se encuentró el jugador"})
     }
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}


 export const getPLayersByTeam = async (req,res)=>{
     const page = parseInt(req.body.Page);
     const startIndex = (page-1)*10;

     try{
        const allData = await Player.find({team:req.body.Name}).collation({locale:'en',strength:2});
        const totalItems = allData.length;     
        const totalP = Math.ceil(totalItems/10);
        const players = await Player.find({team:req.body.Name}).collation({locale:'en',strength:2}).limit(10).skip(startIndex);        
      
       if(allData.length>0){
        res.send({
            Page:page,
            totalPages:totalP,
            Items:players.length,
            totalItems:allData.length,
            Players:players.map(p=>{
                const pl = {name:p.name,position:p.position,nation:p.nation}
                return pl
            })
         })
       }else{
           res.status(400).json({message:"No se encuentran jugadores q pertenezcan a ese equipo!"})
       }
     }
     catch(error){
        res.status(500).json({ message: error.message })
     }  
 };

 export const getPLayerByString = async (req,res)=>{
    const page = parseInt(req.query.page);
    const startIndex = (page-1)*10;
    let order=1;
     if(req.query.order==="asc") order=1
     if(req.query.order==="desc") order=-1

   
    


    try{
       const allData = await Player.find({name:{$regex:req.query.search,$options:"$i"}});
       const totalItems = allData.length;     
       const totalP = Math.ceil(totalItems/10);
       const players = await Player.find({name:{$regex:req.query.search,$options:"$i"}}).limit(10).skip(startIndex).sort({name:order});        
     
      if(allData.length>0){
       res.send({
           Page:page,
           totalPages:totalP,
           Items:players.length,
           totalItems:allData.length,
           Players:players.map(p=>{
               const pl = {name:p.name,position:p.position,nation:p.nation,team:p.team}
               return pl
           })
        })
      }else{
          res.status(400).json({message:"No se encuentran jugadores que coincidan con ese nombre!"})
      }
    }
    catch(error){
       res.status(500).json({ message: error.message })
    }  
     
 };