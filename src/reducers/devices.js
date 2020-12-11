import * as Type from './../constants/ActionTypes';

var initialState = [];

const devices= (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_DEVICES:
            state=action.devices;
            return [...state];
        default: return [...state];
    }

}

export default devices;