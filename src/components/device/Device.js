import React, { Component } from 'react';

class Device extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: {
                id: '',
                name: '',
                created_at: '',
                updated_at: '',
                alive: ''
            }
        }
    }
    onChange = (e) => {

    }
    render() {
        var { device } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h1 className="cart-title">Thêm thiết bị</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">

                                <div className="form-group">
                                    <label>Nhập tên của thiết bị</label>
                                    <input type="text" className="form-control" name="name" value={device.name || ''} onChange={this.onChange} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                        <h1 className="cart-title">Thu thập dữ liệu trên sensor</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="">Sensor_1:</label>
                                <br></br>
                                <small className="text-muted">name</small>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                                <input type="checkbox"></input>
                                <input type="text" hidden value="SENSOR1"></input>
                                <small id="helpId" class="text-muted"> Thu thập</small>
                            </div>
                            <div className="form-group">
                                <label for="">Sensor_2:</label>
                                <br></br>
                                <small className="text-muted">name</small>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                                <input type="checkbox"></input>
                                <input type="text" hidden value="SENSOR2"></input>
                                <small id="helpId" class="text-muted"> Thu thập</small>
                            </div>
                            <div className="form-group">
                                <label for="">Sensor_3:</label>
                                <br></br>
                                <small className="text-muted">name</small>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                                <input type="checkbox"></input>
                                <input type="text" hidden value="SENSOR3"></input>
                                <small id="helpId" class="text-muted"> Thu thập</small>
                            </div>
                            <div className="form-group">
                                <label for="">Sensor_4:</label>
                                <br></br>
                                <small className="text-muted">name</small>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                                <input type="checkbox"></input>
                                <input type="text" hidden value="SENSOR4"></input>
                                <small id="helpId" class="text-muted"> Thu thập</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>
                    </div>
                </div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                        <h1 className="cart-title">Thông tin chi tiết</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>ID: {device.id} -- Name: {device.name} -- Create Date: {device.created_at} -- Update Date: {device.updated_at} -- Alive: {device.alive}</label>
                            <br></br>
                            <label>Token:</label><input className="form-control" />
                            <label>Device ID:</label><input className="form-control" />
                            <br></br>
                            <button type="submit" className="btn btn-primary">Tạo mới Token</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Device;