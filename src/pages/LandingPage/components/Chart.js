import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Value",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

class ChartComponent extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
          {
            fill: false,
            borderColor: "#fff",

            backgroundColor: "#e755ba",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
            label: "Demand of RMG",
            data: [117594, 121045, 143060, 156519, 165162, 175072],
          },
        ],
      },
    });
  }

  render() {
    return (
      <Chart
        chartData={this.state.chartData}
        location="Massachusetts"
        legendPosition="bottom"
      />
    );
  }
}

export default ChartComponent;
