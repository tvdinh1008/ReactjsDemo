import React, { Component } from 'react';

import { actAddUserRequest, actGetUserRequest, actUpdateUserRequest } from './../../actions/index'
import { connect } from 'react-redux'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                username: '',
                full_name: '',
                password: '',
                email: '',
                status: '0',
            },
        }
    }
    componentDidMount() {
        var { match } = this.props;
        //console.log(match)
        var id = match.params.id;
        console.log(id);
        if (id) {
            this.props.onGetUser(id);
        }
    }


    //Được sử dụng bất cứ khi nào mình muốn cập nhật state trước khi render và cập nhật với điều kiện props
    //nhận được props mới gọi hàm này
    static getDerivedStateFromProps(nextProps, prevState) {
        //Gắn user(trong state) bằng user call api qua actions trong store
        if (nextProps && nextProps.itemEditing && Object.keys(nextProps.itemEditing).length !== 0) {
            var { itemEditing } = nextProps;
            return { user: itemEditing }
        }
        return prevState;
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;//trả về name ứng với input bị thay đổi
        var value = target.type === 'checkbox' ? (target.checked ? 1 : 0) : target.value;
        var { user } = this.state;
        user[name] = value;
        this.setState({
            user: user
        });
    }

    onSave = (e) => {
        e.preventDefault();
        console.log(this.state);
        var { user } = this.state;

        if (user.id) {
            this.props.onUpdateUser(user);
            this.props.history.goBack();
        } else {
            this.props.onAddUser(user);
            this.props.history.goBack();
        }
    }

    render() {
        var { user } = this.state;
        return (
            <div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" value={user.username || ''} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" name="full_name" value={user.full_name || ''} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password" value={user.password || ''} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" value={user.email || ''} onChange={this.onChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="status" value={user.status} checked={(user.status === 0 || user.status === '0') ? false : true} onChange={this.onChange} />
                            Bình thường
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>

            </div>
        );
    }
}
//Lấy tất cả các props từ store
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing //cái này lấy ở index.js trong reducers(nơi lưu store)
    }
}

//Lưu lên store
const mapDispatchToProps = (dispath, props) => {
    return {
        onAddUser: (user) => {
            dispath(actAddUserRequest(user));
        },
        onGetUser: (id) => {
            dispath(actGetUserRequest(id));
        },
        onUpdateUser: (user) => {
            dispath(actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);