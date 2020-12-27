import * as Type from './../constants/ActionTypes';
var initialState = {
};

const message = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_MESSAGE:
            return action;
        default:
            return state;
    }
}

export default message;