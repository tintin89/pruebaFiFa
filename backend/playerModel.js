import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    position:{type:String,required:true},
    nation:{type:String,required:true},
    team:{type:String, required:true},
},
{
    timestamps:true,
    versionKey:false
}
);

const Player = mongoose.model("Player",playerSchema);

export default Player;