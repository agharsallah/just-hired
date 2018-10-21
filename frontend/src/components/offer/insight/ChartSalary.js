import React, { Component } from 'react';
import HighchartInit from '../../shared/HighchartInit';

class ChartSalary extends Component {
    constructor(props) {
        super(props);
        this.state = { option: {} }
    }

    componentWillMount() {
        this.setState({
            options: {

                chart: {
                    type: 'columnrange',
                    inverted: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'
                },

                title: {
                    text: 'Salary variation by users',
                    style:{ "color": "white"}
                },
                credits: false,
                /* subtitle: {
                    text: 'Observed in Vik i Sogn, Norway, 2017'
                }, */

                xAxis: {
                    categories: ['u1', 'u2', 'u3', 'u4'],
                    gridLineWidth: 1,
                    title: {
                        text: 'users'
                    }

                },
                yAxis: {
                    title: {
                        text: 'Salary  ( € )'
                    },
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 3,
                        value: 1425,
                        zIndex: 1000,
                        label: {
                            align: 'right',
                            style: {
                                fontStyle: 'italic'
                            },
                            text: 'Average salary',
                            y: 0,
                            rotation:360
                        },
                    }]
                },

                tooltip: {
                    valueSuffix: '€'
                },

                plotOptions: {
                    columnrange: {
                        dataLabels: {
                            enabled: true,
                            format: '{y} €'
                        }
                    }
                },

                legend: {
                    enabled: false
                },

                series: [{
                    name: 'Salary range',
                    color: '#FF6B45',
                    data: [
                        [900, 1500],
                        [800, 1200],
                        [1000, 1700],
                        [1800, 2500],
                    ]
                }]

            }
        })
    }

    render() {
        return (
            <div className='col-md-12' style={{marginBottom:'5vh'}}>
                <HighchartInit styles={{ height: '360px' }} options={this.state.options} />
            </div>
        );
    }
}

export default ChartSalary;