import * as Type from './../constants/ActionTypes';
var initialState = {
    currentUser: {}
};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_USER:
            return action.user;
        case Type.LOGIN_USER:
            return {...state, currentUser:action.user}
        default:
            return state;
    }
}

export default itemEditing;