//import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Device from './components/device/Device';
import DeviceData from './components/device/DeviceData';
import Devices from './components/device/Devices';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import User from './components/user/User';
import Users from './components/user/Users';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span>Home</span></a></li>
                  <li className="breadcrumb-item"><a href="#">Products</a></li>
                  <li className="breadcrumb-item active">Accessories</li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Nội dung*/}
          <div className="row">
            <div className="col">
              <h1>Content page</h1>
              <Link to="/">Trang chủ</Link>
              <br></br>
              <Link to="/login">Login</Link>
              <br></br>
              <Link to="/user-list">Danh sách user</Link>
              <br></br>
              <Link to="/device-list">Danh sách device</Link>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/user-list" exact component={Users} />
                <Route path="/user/add" exact component={User} />
                <Route path="/user/:id/edit" component={User} />

                <Route path="/device-list" exact component={Devices} />
                <Route path="/device/add" exact component={Device} />
                <Route path="/device/:id/edit" component={DeviceData} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
