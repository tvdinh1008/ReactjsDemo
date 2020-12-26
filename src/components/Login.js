import React, { Component } from 'react';
import {actLoginUserRequest} from './../actions/index';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        };
    }
    onChange = (e) => {
        var target=e.target;
        var name=target.name;
        var value=target.value;
        var { user } = this.state;
        user[name] = value;
        this.setState({
            user: user
        });
    }

    onSave = (e) => {
        e.preventDefault();
        const { history } = this.props;
        var { user } = this.state;
        var {currentUser}=this.props;
        this.props.onLogin(user);
        if(currentUser){
            history.push("/");
        }
    }
    
    render() {
        var {user}=this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h1 className="cart-title">Login</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <form onSubmit={this.onSave}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input className="form-control" name="username" value={user.username || ''} type="text" onChange={this.onChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input className="form-control" name="password" value={user.password|| ''} type="text" onChange={this.onChange}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.authenticationService //cái này lấy ở index.js trong reducers(nơi lưu store)
    }
}
//Lưu lên store
const mapDispatchToProps = (dispath, props) => {
    return {
        onLogin:(user) =>{
            dispath(actLoginUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);