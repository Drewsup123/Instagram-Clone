import 
{  
    // Imports from actions/index.js
} from "../actions/index.js";

const initialState = {
    loggedIn : false,
    user : {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default :
            return state;
    }
}

// const mapStateToProps = state => {
//     return {
//         user : state.user,
//         loggedIn : state.loggedIn,
//     }
// }