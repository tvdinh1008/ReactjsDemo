import * as Type from './../constants/ActionTypes';
var initialState = {
    currentUser: {}
};

const authenticationService = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN_USER:
            return { ...state, currentUser: action.user }

        case Type.LOGOUT:
            return { ...state, currentUser: null }
        default:
            return state;
    }
}
export default authenticationService;