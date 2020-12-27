import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actLogout, actLoginUserRequest, actAddUserRequest } from './../actions/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalRegister: false,
      user: {
        username: '',
        password: ''
      }
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var { user } = this.state;
    user[name] = value;
    this.setState({
      user: user
    });
  }

  onSignIn = (e) => {
    e.preventDefault();
    var { user } = this.state;
    this.props.onLogin(user);
    this.closeLogin();
  }

  onSignUp = (e) => {
    e.preventDefault();
    const { history } = this.props;
    var { user } = this.state;
    this.props.onLogin(user);
    debugger
    var { auth } = this.props;
    var currentUser = auth.currentUser;
    debugger
    if (currentUser && Object.keys(currentUser).length !== 0) {
      this.closeLogin();
      debugger
      history.push("/");
    }
    debugger
  }



  closeLogin = () => {
    this.setState({ showModalLogin: false });
  }
  openLogin = () => {
    this.setState({ showModalLogin: true });
  }
  closeRegister = () => {
    this.setState({ showModalRegister: false });
  }
  openRegister = () => {
    this.setState({ showModalRegister: true });
  }
  logOut = () => {
    this.props.onLogout();
  }
  render() {
    var { auth } = this.props;
    var currentUser = auth.currentUser;
    var { user } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#2E4053' }}>
          <a className="navbar-brand">IOT</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">Trang chủ</Link>
              <Link to="/about" className="nav-item nav-link active">Giới thiệu</Link>
              <Link to="/contact" className="nav-item nav-link active">Liên hệ</Link>
            </div>
            <form className="form-inline">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary"><i className="fa fa-search" /></button>
                </div>
              </div>
            </form>

            <ul className="nav navbar-nav navbar-right">

              {
                (currentUser && Object.keys(currentUser).length !== 0) ? (
                  <>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Xin chào, {currentUser.fullName}
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/#">Thông tin chi tiết</Link>
                        <Link className="dropdown-item" to={"/"} onClick={this.logOut}>Đăng xuất</Link>
                      </div>
                    </li>
                  </>
                ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={this.openLogin}><i className="fa fa-sign-in" aria-hidden="true" /> <span className="">Sign in</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={this.openRegister}><i className="fa fa-sign-in" aria-hidden="true" /> <span className="">Sign up</span></a>
                      </li>
                    </>
                  )
              }
            </ul>
          </div>
        </nav>
        <Modal show={this.state.showModalLogin} onHide={this.closeLogin}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Login</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column text-center">
              <form onSubmit={this.onSignIn}>
                <div className="form-group">
                  <input className="form-control" id="username1" placeholder="Your username..." name="username" value={user.username || ''} type="text" onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input className="form-control" id="password1" placeholder="Your password..." name="password" value={user.password || ''} type="password" onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-info btn-block btn-round">Login</button>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
              <div className="text-center text-muted delimiter">or use a social network</div>
              <div className="d-flex justify-content-center social-buttons">
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Google">
                  <i className="fa fa-google-plus-square" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeLogin}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showModalRegister} onHide={this.closeRegister}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Register</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSignUp}>
              <div className="form-group">
                <label>Full name</label>
                <input type="text" className="form-control" placeholder="Full name" />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>

              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeRegister}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
//Lấy tất cả các props từ store
const mapStateToProps = state => {
  return {
    auth: state.authenticationService //cái này lấy ở index.js trong reducers(nơi lưu store)
  }
}
//Lưu lên store
const mapDispatchToProps = (dispath, props) => {
  return {
    onLogout: () => {
      dispath(actLogout());
    },
    onLogin: (user) => {
      dispath(actLoginUserRequest(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
