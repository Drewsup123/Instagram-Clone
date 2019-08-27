// Action Exports
export const LOGIN = "LOGIN";

export const login = (email, password) => dispatch => {
    dispatch({ type : LOGIN, payload : {email : email, password : password}})
}