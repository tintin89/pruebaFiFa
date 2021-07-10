import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Details  from "./pages/Details";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {updatePlayersRequest} from './store/playersAction';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePlayersRequest(""));
   
  }, [dispatch])


  return (
    <div className="app">
      <BrowserRouter>
      <NavBar/>    
      <Switch>
      <Route path="/details/:id" render={()=>(           
      <Details/>        
      )}/>      
      <Route path="/" render={()=>(           
      <Home/>        
      )}/>  
      </Switch>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
