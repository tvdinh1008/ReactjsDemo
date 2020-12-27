import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white mt-4">
                <div className="container-fluid py-3">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Footer</h5></div>
                        <div className="col-md-3" />
                        <div className="col-md-3" />
                        <div className="col-md-3" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">I stay at the bottom of the viewport! <span className="small"><br />Unless the page content pushes me further.</span></div>
                        <div className="col-md-3" />
                        <div className="col-md-3 text-right small align-self-end">©2020 Brand, Inc.</div>
                    </div>
                    <div className="row">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                            <a href="#">Trần Văn Định</a>.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;