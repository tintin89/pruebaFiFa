import './AllPlayers.css';
import {useSelector} from 'react-redux';
import Player from './Player/Player';

const mapState = (playersReducer)=>({
    players:playersReducer.players
})


function AllPlayers() {    
   const {players} = useSelector(mapState);

    return (
        <div className="allplayers__container">
           <div className="allplayers">
           {
                players.map((p,index)=>(
                    <Player key={index} {...p}/>
                ))
            }   
           </div>     
        </div>
    )
}

export default AllPlayers
