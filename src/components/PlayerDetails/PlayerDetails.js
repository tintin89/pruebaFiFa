import React,{useEffect,useState} from 'react';
import './PlayerDetails.css';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import avatar from '../../assets/avatar.jpg';
import axios from 'axios';

const mapState = (playersReducer)=>({
    players:playersReducer.players
})

function PlayerDetails() {
    const {id} = useParams();
    const {players} = useSelector(mapState);
    const [player,setPlayer] = useState(null);
    
  
  useEffect(() => {
  const getPLayer = async()=> await axios.get(`http://localhost:5000/api/v1/${id}`,{headers:{'x-api-key': "miapikey"}})
    .then(response=>{
        setPlayer(prevState=>response.data);
    })
    .catch(error=>console.log(error))

    getPLayer()

      return getPLayer()
  }, [id])
    
    return (
         <div className="playerDetails__container">
            <div className="playerDetails">
             <img src={avatar} alt="avatar"/>
             <div className="playerDetailsRight">
                 <h6><span>Nombre: </span> {player?.name}</h6>
                 <h6><span>Posición: </span> {player?.position}</h6>
                 <h6><span>País: </span> {player?.nation}</h6>
                 <h6><span>Equipo: </span> {player?.team}</h6>
             </div>

            </div>
        </div>
    )
}

export default PlayerDetails
