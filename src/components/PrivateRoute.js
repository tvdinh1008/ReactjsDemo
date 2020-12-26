import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * 
 * @param {*} param0 
 */
export const PrivateRoute = ({ auth,component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        //Check đã login chưa? Nếu chưa redirect login
        auth=auth.currentUser;
        if (!auth || Object.keys(auth).length===0) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        //check quyền vào dựa vào roles truyền vào và roles của currentUser
        if (roles && Object.keys(auth).length!==0 &&roles.indexOf(auth.authorities[0].authority) === -1) {
            //Nếu bị hạn chế vai trò(Giả sử user chỉ có 1 quyền nên check vậy là ok)
            return <Redirect to={{ pathname: '/' }} />
        }

        //TH được quyền vào link
        return <Component {...props} />
    }} />
)
//Lấy tất cả các props từ store
const mapStateToProps = state => {
    return {
        auth: state.authenticationService //cái này lấy ở index.js trong reducers(nơi lưu store)
    }
}
export default connect(mapStateToProps, null)(PrivateRoute);