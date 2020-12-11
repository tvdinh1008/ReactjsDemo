import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchDevicesRequest } from './../../actions/index'

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [{
                id: 1,
                name: 'ESP32_1',
                created_at: '02-12-2020',
                updated_at: '10-12-2020',
                alive: '1'
            }, {
                id: 2,
                name: 'ESP32_2',
                created_at: '02-12-2020',
                updated_at: '10-12-2020',
                alive: '0'
            }]
        };
    }
    onDelete(id) {

    }
    componentDidMount() {
        this.props.fetchAllDevices();
    }

    render() {
        var url = "/device";
       // var { devices } = this.state;
       var { devices } = this.props;
        var result = devices.map((device, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{device.id}</td>
                    <td>{device.name}</td>
                    <td>{new Date(device.created_at).toLocaleDateString("en-US")}</td>
                    <td>{new Date(device.updated_at).toLocaleDateString("en-US")}</td>
                    <td>{device.alive}</td>
                    <td>
                        <Link to={`${url}/${device.id}`} className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></Link>
                        <Link to={`${url}/${device.id}/edit`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
                        <button type="button" className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.onDelete(device.id)}><i className="material-icons"></i></button>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <h1>Đây là danh sách device</h1>
                <Link to={`${url}/add`} className="btn btn-info mb-10">Thêm device</Link>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Device ID</th>
                            <th>Name</th>
                            <th>Create Date</th>
                            <th>Update Date</th>
                            <th>Alive</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result}
                    </tbody>
                </table>
            </div>
        );
    }
}
//Lấy tất cả các props từ store
const mapStateToProps = state => {
    return {
        devices: state.devices ////cái này lấy ở index.js trong reducers(nơi lưu store)
    }
}
//Lưu lên store
const mapDispatchToProps = (dispath, props) => {
    return {
        fetchAllDevices: () => {
            dispath(actFetchDevicesRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices);