import * as Type from './../constants/ActionTypes';
import axios from 'axios';


/*
    + Async Action
    + Là action chưa sẵn sàng ngay khi được gọi.
    + Sử dụng redux-thunk để trì hoãn việc dispath=>fetch dữ liệu xong mới dispath

    Nó là lớp nằm giữa Reducers và Dispath Actions.

*/

//Thay vì phải callApi trong component thì ta sẽ call ở actions luôn
export const actFetchUsersRequest = () => {
    var jwt=localStorage.getItem("token");
    return (dispatch) => {
        return axios({
            method: 'GET',
            url: 'http://localhost:8080/SpringIOT/api/auth/list',
            data: null, 
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
            responseType: 'json'
        }).then(res => {
            dispatch(actFetchUsers(res.data));
        }).catch(err => {
            console.log(err);
        });
    };
}
//=>khi callapi thì nó gọi dispath để lưu luôn vào store
//sự kiện lấy tất cả users(lưu vào store)
export const actFetchUsers = (users) => {
    return {
        type: Type.FETCH_USERS,
        users
    }
}

//Chức năng delete
export const actDeleteUserRequest = (id) => {

    return dispatch => {

        var ids = [];
        ids.push(id);
        return axios({
            method: 'DELETE',
            url: `http://localhost:8080/SpringIOT/api/auth`,
            data: JSON.stringify(ids),
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            responseType: 'json'
        }).then(res => {
            dispatch(actDeleteUser(id));
        }).catch(err => {
            console.log(err);
        });
    }

}
export const actDeleteUser = (id) => {
    return {
        type: Type.DELETE_USER,
        id
    }
}



//Chức năng thêm mới user
export const actAddUserRequest = (user) => {
    return dispatch => {
        return axios({
            method: 'POST',
            url: `http://localhost:8080/SpringIOT/api/auth`,
            data: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        }).then(res => {
            dispatch(actAddUser(res.data)); //call để lưu vào store trong producers
        }).catch(err => {
            console.log(err);
        });
    }
}
//user này là user trên store
export const actAddUser = (user) => {
    return {
        type: Type.ADD_USER,
        user
    }
}


export const actGetUserRequest = (id) => {
    return dispatch => {
        return axios({
            method: 'GET',
            url: `http://localhost:8080/SpringIOT/api/auth/${id}`,
            data: null,
            responseType: 'json'
        }).then(res => {
            dispatch(actGetUser(res.data));
        }).catch(err => {
            console.log(err);
        });
    }
}

//Lấy user trong store và cập nhật trong store
export const actGetUser = (user) => {
    return {
        type: Type.GET_USER,
        user
    }
}

export const actUpdateUserRequest = (user) => {
    return dispatch => {
        return axios({
            method: 'PUT',
            url: `http://localhost:8080/SpringIOT/api/auth`,
            data: JSON.stringify(user),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: 'json'
        }).then(res => {
            dispatch(actUpdateUser(res.data));
        }).catch(err => {
            console.log(err);
        });
    }
}
export const actUpdateUser = (user) => {
    return {
        type: Type.UPDATE_USER,
        user
    }
}

export const actLoginUserRequest = (user) => {
    return dispatch => {
        return axios({
            method: 'POST',
            url: `http://localhost:8080/SpringIOT/api/auth/signin`,
            data: JSON.stringify(user),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: 'json'
        }).then(res => {
            localStorage.setItem("token", res.data.jwt)
            dispatch(actLoginUser(res.data.user));
        }).catch(err => {
            console.log(err);
        });
    }
}

export const actLoginUser = (user) => {
    return {
        type: Type.LOGIN_USER,
        user
    }
}
export const actFetchDevicesRequest = () => {
    return dispatch => {
        var jwt = localStorage.getItem('token');
        return axios({
            method: 'GET',
            url: 'http://localhost:8080/SpringIOT/api/device/list',
            data: null,
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
            responseType: 'json'
        }).then(res => {
            dispatch(actFetchDevices(res.data));
        }).catch(err => {
            console.log(err);
        });
    }
}

export const actFetchDevices = (devices) => {
    return {
        type: Type.FETCH_DEVICES,
        devices
    }
}