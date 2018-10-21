import React, { Component } from 'react';
import ChartSalary from './insight/ChartSalary' ;
import ChartSkills from './insight/ChartSkills' ;
import MapApplicant from './insight/MapApplicant' ;
class InsightPage extends Component {
    render() {
        return (
            <div>
            <ChartSalary/>
            <ChartSkills />
            <MapApplicant />
            </div>
        );
    }
}

export default InsightPage;