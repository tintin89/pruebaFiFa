

export const verifica = (req,res,next)=>{
    const apiKey = process.env.API_KEY || "miapikey" 
    if(req.headers['x-api-key']===apiKey){
        next();
    }else{        
        res.status(401).send({message:'No tienes una api-key valida!'})
    }
}