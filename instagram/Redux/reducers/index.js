import 
{  
    // Imports from actions/index.js
    LOGIN
} from "../actions/index.js";

const initialState = {
    loggedIn : false,
    user : {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default :
            return state;
        case LOGIN : 
            return {...state, loggedIn : true}
    }
}

// const mapStateToProps = state => {
//     return {
//         user : state.user,
//         loggedIn : state.loggedIn,
//     }
// }