import React, { Component } from 'react';
import HighchartInit from '../../shared/HighchartInit';

class ChartSkills extends Component {
    constructor(props) {
        super(props);
        this.state = { option: {} }
    }
    componentWillMount() {
        this.setState({
            options: {
                
                    chart: {
                        type: 'column',
                        backgroundColor: 'rgba(255, 255, 255, 0.0)'

                    },
                    credits: false,

                    title: {
                        text: 'Distribution of Skills per Applicants',
                        style:{ "color": "white"}
                    },
                    xAxis: {
                        categories: ['Android', 'c++', 'Python', 'AI','Cloud Computing'],
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number of Applicants'
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            }
                        }
                    },
                    legend: {
                        enabledLabels:false,

                    },
                    tooltip: {
                        headerFormat: '<b>{point.x}</b><br/>',
                        pointFormat: '{series.name}: {point.y}'
                    },
                     plotOptions: {
                        column: {
                            colorByPoint: true
                        }
                    },
                    colors: [
                        '#46211A',
                        '#693D3D',
                        '#BA5536',
                        '#A43820'
                    ],
                   
                    series: [{
                        name: 'Applicants number',
                        data: [4, 1, 3, 1, 0]
                    }]
                }
            
        })
    }
    render() {
        return (
            <div className='col-md-12' style={{marginBottom:'5vh'}} >
                <HighchartInit styles={{ height: '360px' }} options={this.state.options} />
            </div>
        );
    }
}

export default ChartSkills;