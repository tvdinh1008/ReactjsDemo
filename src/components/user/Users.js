import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { actFetchUsersRequest, actDeleteUserRequest } from './../../actions/index';


class Users extends Component {

  /*
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
  */

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  onDelete(id) {
    if (confirm('Bạn có chắc chắn muốn xóa hay không? id: ' + id)) { //eslint-disable-line
      /*
      var { users } = this.state;
      var ids = [];
      ids.push(id);
      axios({
        method: 'DELETE',
        url: `http://localhost:8080/SpringIOT/api/auth`,
        data: JSON.stringify(ids),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        responseType: 'json'
      }).then(res => {
        console.log(res);
        //xóa phần tử khỏi mảng
        if (res.status === 200) {
          var index = this.findIndex(users, id);
          if (index !== -1) {
            users.splice(index, 1);
            this.setState({
              users: users,
            });
          }
        }
        debugger
      }).catch(err => {
        console.log(err);
      });
      */

      this.props.onDeleteUser(id);
    }
  }

  findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
      if (user.id === id) {
        result = index;
      }
    });
    return result;
  }

  render() {
    var { users } = this.props;//gọi ở redux
    //var { users } = this.state;
    debugger
    var url = "/user";
    var result = users.map((user, index) => {
      return (
        <Link to={`${url}/${user.username}`} key={index}>
          <li className="list-group-item">
            {user.id} --{user.full_name}--{user.username}--{user.roleDto.name}
          </li>
        </Link>
      );
    });
    var tbody = users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{user.full_name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td>{user.roleDto.name}</td>
          <td>
            <Link to={`${url}/${user.id}`} className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></Link>
            <Link to={`${url}/${user.id}/edit`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
            <button type="button" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.onDelete(user.id)}><i className="material-icons"></i></button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <br></br>
        <Link to={`${url}/add`} className="btn btn-info mb-10">Thêm nhân viên</Link>
        {/* <ul className="list-group">
          {result}
        </ul> */}

        <div className="row">
          <div className="col-sm-8"><h2>Customer <b>Details</b></h2></div>
          <div className="col-sm-4">
            <div className="search-box">
              <i className="material-icons"></i>
              <input type="text" className="form-control" placeholder="Search…" />
            </div>
          </div>

        </div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name <i className="fa fa-sort" /></th>
              <th>UserName <i className="fa fa-sort" /></th>
              <th>Email <i className="fa fa-sort" /></th>
              <th>Status</th>
              <th>Role <i className="fa fa-sort" /></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tbody}
            <tr>
              <td>1</td>
              <td>Thomas Hardy</td>
              <td>89 Chiaroscuro Rd.</td>
              <td>Portland</td>
              <td>97219</td>
              <td>USA</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Maria Anders</td>
              <td>Obere Str. 57</td>
              <td>Berlin</td>
              <td>12209</td>
              <td>Germany</td>
              <td>
                <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
              </td>
            </tr>


          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
          <ul className="pagination">
            <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
          </ul>
        </div>

      </div>
    );
  }
}

//Lấy tất cả các props từ store
const mapStateToProps = state => {
  return {
    users: state.users ////cái này lấy ở index.js trong reducers(nơi lưu store)
  }
}
//Lưu lên store
const mapDispatchToProps = (dispath, props) => {
  return {
    fetchAllUsers: () => {
      dispath(actFetchUsersRequest());
    },
    onDeleteUser: (id) => {
      dispath(actDeleteUserRequest(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);