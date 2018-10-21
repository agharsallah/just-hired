import React, { Component } from 'react';
import axios from 'axios';
import ApplicationPage from './ApplicationPage';
import InsightPage from './InsightPage';
import ZigzagMenu from './ZigzagMenu';
class RootOffer extends Component {
    constructor(props) {
        super(props);
        this.state = { candidate: [], selectedSubMenu: 'application',keyy:0 }

    }

    componentWillMount() {
        //we get from the database the users id that have applied to our company fast recruitment challenge 
        //get applicantOfChallengeX: input is the challenge_id /* && company_id  */  --> Submitters_id ++ challengeScore ++

        //we get the data related to the intervuwees from InfoJob 

        //we get ciriculum id "code": 2c854914-96ef-4b8c-bbcd-83cb02b2727a

        let candidate = [{ "skills": { "expertise": [{ "skill": "Android", "level": "alto" }, { "skill": "Python", "level": "alto" }, { "skill": "JavaScript", "level": "medio" }], "language": [{ "id": 1, "writing": "alto", "comments": "", "speaking": "nativo", "reading": "excelente" }] }, "user_id": "1", "infojobId": "b1c1ab5f5fcb4a119a0e322f161c4942", "challengeScore": 6, "startingDate": "01-01-2019", "minimumSalary": 2000, "email": "aa.test20@gmail.com", "key": "39ab490c-4309-445b-a5f9-4be5d05e54bd", "hasPhoto": true, "photo": "https://www.infojobs.net/candidato.foto?id_candidato=2c854914-96ef-4b8c-bbcd-83cb02b2727a", "name": "Ali", "surname1": "mark", "surname2": "", "fullName": "mark&nbsp;mark&nbsp;-", "city": "Barcelona", "province": { "id": 305, "value": "Nord Pas de Calais" }, "publicProfileLink": "", "status": 0, "validatedMail": 1, "accountCreation": "2018-10-20T09:27:40.000+0000", "lastCVUpdate": "2018-10-20T13:29:22.000+0000", "photoAccepted": true }, { "skills": { "expertise": [{ "skill": "AI", "level": "alto" }, { "skill": "Python", "level": "alto" }, { "skill": "JavaScript", "level": "medio" }], "language": [{ "id": 1, "writing": "alto", "comments": "", "speaking": "nativo", "reading": "excelente" }] }, "user_id": "2", "infojobId": "b1c1ab5f5fcb4a119a0e322f161c4942", "challengeScore": 5, "startingDate": "01-02-2019", "minimumSalary": 2500, "email": "user2.test20@gmail.com", "key": "39ab490c-4309-445b-a5f9-4be5d05e54bd", "hasPhoto": true, "photo": "https://www.infojobs.net/candidato.foto?id_candidato=2c854914-96ef-4b8c-bbcd-83cb02b2727a", "name": "Cesare", "surname1": "Oliver", "surname2": "", "fullName": "mark&nbsp;mark&nbsp;-", "city": "paris", "province": { "id": 305, "value": "Nord Pas de Calais" }, "publicProfileLink": "", "status": 0, "validatedMail": 1, "accountCreation": "2018-10-20T09:27:40.000+0000", "lastCVUpdate": "2018-10-20T13:29:22.000+0000", "photoAccepted": true }, { "skills": { "expertise": [{ "skill": "Blockchai", "level": "alto" }, { "skill": "Python", "level": "medio" }, { "skill": "JavaScript", "level": "alto" }], "language": [{ "id": 1, "writing": "alto", "comments": "", "speaking": "nativo", "reading": "excelente" }] }, "user_id": "3", "infojobId": "b1c1ab5f5fcb4a119a0e322f161c4942", "challengeScore": 6, "startingDate": "01-01-2019", "minimumSalary": 1000, "email": "user3.test20@gmail.com", "key": "39ab490c-4309-445b-a5f9-4be5d05e54bd", "hasPhoto": true, "photo": "https://www.infojobs.net/candidato.foto?id_candidato=2c854914-96ef-4b8c-bbcd-83cb02b2727a", "name": "Fernando", "surname1": "Tores", "surname2": "", "fullName": "mark&nbsp;mark&nbsp;-", "city": "barcelona", "province": { "id": 305, "value": "Nord Pas de Calais" }, "publicProfileLink": "", "status": 0, "validatedMail": 1, "accountCreation": "2018-10-20T09:27:40.000+0000", "lastCVUpdate": "2018-10-20T13:29:22.000+0000", "photoAccepted": true }, { "skills": { "expertise": [{ "skill": "Blockchai", "level": "alto" }, { "skill": "Python", "level": "medio" }, { "skill": "JavaScript", "level": "alto" }], "language": [{ "id": 1, "writing": "alto", "comments": "", "speaking": "nativo", "reading": "excelente" }] }, "user_id": "4", "infojobId": "b1c1ab5f5fcb4a119a0e322f161c4942", "challengeScore": 6, "startingDate": "01-01-2019", "minimumSalary": 1000, "email": "user3.test20@gmail.com", "key": "39ab490c-4309-445b-a5f9-4be5d05e54bd", "hasPhoto": true, "photo": "https://www.infojobs.net/candidato.foto?id_candidato=2c854914-96ef-4b8c-bbcd-83cb02b2727a", "name": "Felix", "surname1": "Vila", "surname2": "", "fullName": "mark&nbsp;mark&nbsp;-", "city": "madrid", "province": { "id": 305, "value": "Nord Pas de Calais" }, "publicProfileLink": "", "status": 0, "validatedMail": 1, "accountCreation": "2018-10-20T09:27:40.000+0000", "lastCVUpdate": "2018-10-20T13:29:22.000+0000", "photoAccepted": true }, { "skills": { "expertise": [{ "skill": "Blockchai", "level": "bajo" }, { "skill": "React", "level": "medio" }, { "skill": "matlab", "level": "alto" }], "language": [{ "id": 1, "writing": "alto", "comments": "", "speaking": "nativo", "reading": "excelente" }] }, "user_id": "5", "infojobId": "b1c1ab5f5fcb4a119a0e322f161c4942", "challengeScore": 6, "startingDate": "01-01-2019", "minimumSalary": 1000, "email": "user3.test20@gmail.com", "key": "39ab490c-4309-445b-a5f9-4be5d05e54bd", "hasPhoto": true, "photo": "https://www.infojobs.net/candidato.foto?id_candidato=2c854914-96ef-4b8c-bbcd-83cb02b2727a", "name": "Sofie", "surname1": "Davis", "surname2": "", "fullName": "mark&nbsp;mark&nbsp;-", "city": "italy", "province": { "id": 305, "value": "Nord Pas de Calais" }, "publicProfileLink": "", "status": 0, "validatedMail": 1, "accountCreation": "2018-10-20T09:27:40.000+0000", "lastCVUpdate": "2018-10-20T13:29:22.000+0000", "photoAccepted": true }]
        //get time left from DB
        var self = this;

        axios.get('http://localhost:1234/api/get_proceeded')
            .then(function (response) {
                // handle success
                let FilterRes;

                console.log(response);
                console.log(response.data.length);
                for (let i = 0; i < (response.data).length; i++) {
                    const element = response.data[i];

                    FilterRes = _.filter(candidate, function (o) {
                        return element.userId !== o.user_id
                    });
                }

                console.log(FilterRes);

                this.setState({ candidate: FilterRes,keyy:1 })

            }.bind(this))

            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    getVizType(selectedSubMenu) {
        this.setState({
            selectedSubMenu
        });
    }
    render() {
        return (
            <div style={{ background: '#50a3a2', background: 'linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)' }}>

                <div className='container'>
                    <ZigzagMenu getVizType={this.getVizType.bind(this)} />

                    {this.state.selectedSubMenu === 'application' ? <ApplicationPage key={this.state.keyy} data={this.state.candidate} />
                        : (this.state.selectedSubMenu === 'insight' ? <InsightPage data={this.state.candidate} />
                            : null
                        )

                    }

                </div>

            </div>
        );
    }
}

export default RootOffer;