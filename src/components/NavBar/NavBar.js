import React from 'react';
import './NavBar.css';
import {useHistory} from 'react-router-dom';

function NavBar() {
  const history = useHistory();
    return (
      <div className="navbar">
     <img onClick={()=>history.push('/')} alt="logo"
     src="https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/global_assets/common/navigation/fifa21-primary-horizontal-white-nav.svg"/>
            
     </div>
    )
}

export default NavBar
