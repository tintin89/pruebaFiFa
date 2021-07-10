import React from 'react';
import './Player.css';
import avatar from '../../../assets/avatar.jpg';
import {useHistory} from 'react-router-dom';

function Player(props) {
    const history = useHistory();
    return (
        <div onClick={()=>{
            if(props.noShow) return
            history.push(`/details/${props._id}`)}} className="player">
            <img alt="avatar" src={avatar}/>
            <div className="player__footer">
            <h6><span>Nombre:</span> {props.name}</h6>
            <h6><span>Posición:</span> {props.position}</h6>                 
            </div>           
        </div>
    )
}

export default Player
