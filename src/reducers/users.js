import * as Type from './../constants/ActionTypes';
var initialState = [
    {
        id: 1,
        username: "dinh123",
        full_name: "Định nhé",
        email: "dinhtv@gmail.com",
        password: "fghjkfdhbjnsksm",
        status: 1,
        roleDto: {
            name: "User",
            code: "USER"
        }
    }, {
        id: 2,
        username: "dinhaaa",
        full_name: "Định nhé",
        email: "dinhtv@gmail.com",
        password: "fghjkfdhbjnsksm",
        status: 1,
        roleDto: {
            name: "User",
            code: "USER"
        }
    }, {
        id: 3,
        username: "dinhnhe",
        full_name: "Định nhé",
        email: "dinhtv@gmail.com",
        password: "fghjkfdhbjnsksm",
        status: 1,
        roleDto: {
            name: "User",
            code: "USER"
        }
    }
];

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.id === id) {
            result = index;
        }
    });
    return result;
}

const users = (state = initialState, action) => {

    var index = -1;
    var { id,user } = action; 

    switch (action.type) {
        case Type.FETCH_USERS:
            state = action.users;
            return [...state];
        case Type.DELETE_USER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Type.ADD_USER:
            state.push(action.user);
            return [...state];
        case Type.UPDATE_USER:
            index=findIndex(state,user.id);
            state[index]=user;
            return [...state];
        default: return [...state];
    }
}

export default users;