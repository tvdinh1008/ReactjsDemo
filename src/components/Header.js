import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalRegister: false
    };
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#2E4053' }}>
          <a href="#" className="navbar-brand">Brand</a>
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
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-user-circle-o" aria-hidden="true" /> <span className="">Account</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-question" aria-hidden="true" /> <span className="">Support</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.openLogin}><i className="fa fa-sign-in" aria-hidden="true" /> <span className="">Login</span></a>
             
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.openRegister}><i className="fa fa-sign-in" aria-hidden="true" /> <span className="">Register</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-sign-out" aria-hidden="true" /> <span className="">Logout</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
          </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
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
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" id="email1" placeholder="Your email address..." name="txtUsername" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password1" placeholder="Your password..." name="txtPassword" />
                </div>
                <button type="button" className="btn btn-info btn-block btn-round">Login</button>
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
            <form>
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
export default Header;
