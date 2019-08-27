// Action Exports
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const login = user => dispatch => {
    dispatch({ type : LOGIN, payload : user});
}

export const signup = user => dispatch => {
    dispatch({ type : SIGNUP, payload : user});
}