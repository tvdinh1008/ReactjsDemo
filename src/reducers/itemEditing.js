import * as Type from './../constants/ActionTypes';
var initialState = {
};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_USER:
            return action.user;
        default:
            return state;
    }
}

export default itemEditing;