import React, { Component } from 'react';
import axios from 'axios';
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
            axios({
                method: 'GET',
                url: `http://localhost:8080/SpringIOT/api/auth/${id}`,
                data: null,
                responseType: 'json'
            }).then(res => {
                console.log(res);
                this.setState({
                    user: res.data,
                });
            }).catch(err => {
                console.log(err);
            });
        }
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
        debugger
    }

    onSave = (e) => {
        e.preventDefault();
        console.log(this.state);
        var { user } = this.state;

        if (user.id) {
            debugger
            axios({
                method: 'PUT',
                url: `http://localhost:8080/SpringIOT/api/auth`,
                data: JSON.stringify(user),
                headers:{'Accept': 'application/json','Content-Type': 'application/json'},
                responseType: 'json'
            }).then(res => {
                console.log(res);
                this.setState({
                    user: res.data,
                });
                debugger
                this.props.history.goBack();
            }).catch(err => {
                console.log(err);
                debugger
            });

        } else {
            //thêm mới
            axios({
                method: 'POST',
                url: `http://localhost:8080/SpringIOT/api/auth`,
                data: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            }).then(res => {
                console.log(res);
                this.setState({
                    user: res.data,
                });
                this.props.history.goBack();
            }).catch(err => {
                console.log(err);
            });
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
export default User;