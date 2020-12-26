import * as Type from './../constants/ActionTypes';
var initialState = {
    currentUser: {}
};

const authenticationService = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN_USER:
            return {...state, currentUser:action.user}
        default:
            return state;
    }
}
export default authenticationService;