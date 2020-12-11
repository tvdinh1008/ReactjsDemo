import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ChartDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    render() {
        var { chartData } = this.state;
        debugger
        return (
            <div className="chart">
                <Line
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}>
                </Line>
            </div>
        );
    }
}

export default ChartDemo;