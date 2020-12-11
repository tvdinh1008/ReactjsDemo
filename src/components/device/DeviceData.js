import React, { Component } from 'react';
import ChartDemo from './ChartDemo';




class DeviceData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February', 'March',
                    'April', 'May'],
                datasets: [
                    {
                        label: 'Rainfall',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [65, 59, 80, 81, 56]
                    }
                ]
            },
            lastDataSensor: [{ "id": 31, "value": 89.0, "time": null, "sensorDto": { "id": 1, "name": "humidity", "sensorTypeDto": null, "sensorDataList": [], "deviceDto": null } }
                , { "id": 32, "value": 29.8, "time": null, "sensorDto": { "id": 2, "name": "temperature", "sensorTypeDto": null, "sensorDataList": [], "deviceDto": null } }
                , { "id": 33, "value": 0.85, "time": null, "sensorDto": { "id": 3, "name": "ec", "sensorTypeDto": null, "sensorDataList": [], "deviceDto": null } }]
        }
    }



    render() {
        var { lastDataSensor } = this.state;
        var result = lastDataSensor.map((sensor, index) => {
            return (
                <div key={index}>
                    <h4>{sensor.sensorDto.name}</h4>
                    <br></br>
                    <label>ID: {sensor.id} -- Value: {sensor.value} -- Time: {sensor.time}</label>
                    <br></br>
                    <br></br>
                </div>
            )
        });
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h1 className="cart-title">Last Data Sensor</h1>
                    </div>
                    <div className="card-body">
                        {result}
                    </div>
                </div>

                <h1>Biểu đồ theo năm</h1>
                <ChartDemo chartData={this.state.chartData} />
            </div>
        );
    }
}

export default DeviceData;