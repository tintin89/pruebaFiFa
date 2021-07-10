import * as actionTypes from './actionTypes';
import axios from 'axios';


export const updatePlayers=(datos)=>{
    return {
        type:actionTypes.UPDATE_PLAYERS,
        payload:datos
    }
}

export const updatePlayersRequest = (query) =>{
    return async dispatch => {
        if(query!==""){
         await axios.post('http://localhost:5000/api/v1/team',{Name:query,Page:1},{headers:{'x-api-key': "miapikey"}})
         .then(response=>{
             dispatch(updatePlayers(response.data.Players.map((p)=>({...p,noShow:true}))))
         })
         .catch(error=>{
             alert(error.message)
         })

        }else{
         await axios.get(`http://localhost:5000/api/v1/`,{headers:{'x-api-key': "miapikey"}})
        .then(response=>{
            dispatch(updatePlayers(response.data));
        })
        .catch(error=>console.log(error))
        }
    }
}