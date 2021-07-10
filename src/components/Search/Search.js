import React,{useState} from 'react';
import './Search.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import {updatePlayersRequest} from '../../store/playersAction';

function Search() {
 const dispatch = useDispatch();
 const [query,setQuery] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();       
        dispatch(updatePlayersRequest(query));


    }
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <label className="labelInput" htmlFor="search">Encuentra los jugadores de tu equipo!</label>
                <div className="input__field">
                <input value={query} autoComplete="off"  id="search" type="text" onChange={e=>setQuery(e.target.value)}/>   
                <IconButton type="submit"><SearchOutlinedIcon/></IconButton>             
                </div>
            </form>            
        </div>
    )
}

export default Search
