import React, { Component } from 'react';
import Card from './Card';
import CountDown from './CountDown';
import _ from 'lodash';
import Select from 'react-select';

class ApplicationPage extends Component {
    constructor(props) {
        super(props);
        this.state = { allCandidate: [], candidates: [], skillFilter: 'Android', allSkills: [] }
    }


    componentWillMount() {
        let allSkills = [];
        for (let i = 0; i < (this.props.data).length; i++) {
            const element = this.props.data[i];
            for (let j = 0; j < (element.skills.expertise).length; j++) {
                const element2 = (element.skills.expertise)[j];
                allSkills.push({ value: element2.skill, label: element2.skill })

            }


        }
        console.log();
        this.setState({ candidates: this.props.data, allCandidate: this.props.data, allSkills: _.uniq(allSkills, 'value') });
    }

    handleSkillSelect(skillFilter) {
        console.log(skillFilter);
        //prepare string of skills
        let toMatchIndex = []
        _.filter(this.state.allCandidate, function (o, j) {
            for (let i = 0; i < (o.skills.expertise).length; i++) {
                const element = o.skills.expertise[i];
                console.log('------------', element);
                if (element.skill == (skillFilter.value)) {
                    toMatchIndex.push(j)
                }

            }
        })
        let candidates = [];
        for (let k = 0; k < this.state.allCandidate.length; k++) {
            if (toMatchIndex.includes(k)) {
                candidates.push(this.state.allCandidate[k])
            }

        }
        this.setState({ skillFilter, candidates });
    }
    render() {
        let candidates = this.state.candidates
        return (
            <div className='container'>
                <CountDown deadline='2018/10/21 23:55:00' />
                <div className='col-md-4'>
                    <h3 style={{ textAlign: 'center' }}>Filter</h3>
                    <div className="" style={{ color: 'black' }}>
                        <div className="well ">
                            <p>Filter per skills </p>
                            <Select
                                onChange={this.handleSkillSelect.bind(this)}
                                value={this.state.skillFilter}
                                options={this.state.allSkills}
                            />
                            <p style={{ marginTop: '3vh' }}>Filter per Challenge Score</p>
                            <p>Filter per location</p>
                            <p>Filter per experience </p>
                            <p>Filter per minimum salary</p>
                            <p>Filter per work starting date </p>


                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <h3 style={{ textAlign: 'center' }}>Applicants</h3>
                    {candidates.map(function (element, index) {
                        return <Card
                            name={element.name + ' ' + element.surname1}
                            score={element.challengeScore}
                            skills={element.skills.expertise}
                            userId={element.user_id}
                        />
                    })}

                </div>

            </div>

        );
    }
}

export default ApplicationPage;