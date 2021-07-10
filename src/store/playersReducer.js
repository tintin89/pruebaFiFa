import * as actionTypes from './actionTypes';


const initialState = {
    players:[]
    };
  
  const playersReducer = (state = initialState, action) => {
    switch (action.type) {
     case actionTypes.UPDATE_PLAYERS:
         return {
             ...state,
             players:action.payload
         }
               
      default:
        return state;
    }
    
  };
  
  export default playersReducer;