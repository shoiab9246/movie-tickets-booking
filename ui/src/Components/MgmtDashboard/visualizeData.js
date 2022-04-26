import React from "react";
import { Chart } from "react-google-charts";

import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const options = {
  title: "business data",
  chartArea: { width: "50%" },
  hAxis: {
    title: "dollars",
    minValue: 0,
  },
  vAxis: {
    title: "month",
  },
};

class HistogramChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: null};
        
    }

    componentDidMount = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ })
        };
        fetch(`${API_URL}/theatre/gettheatres`, requestOptions)
        .then(
            async response => {
                const theatres = await response.json();
                const requestOptions2 = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({theatres: theatres})
                };
                fetch(`${API_URL}/reservation/visualizeddata`, requestOptions2)
                .then(
                    async response2 => {
                        const data = await response2.json();
                        this.setState({data: data});
                        console.log(this.state);
                    }
                )
            }
        )
    }

    render() {
        return (
            <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={this.state.data}
            options={options}
            />
        );
    }
}

export default HistogramChart;
