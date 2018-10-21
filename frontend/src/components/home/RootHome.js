import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import counterpart from 'counterpart';
import { Divider } from 'material-ui';

export default class RootHome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const TITLE = <Translate type='text' content='home.title' />//Municipal election data
    /* translation 1st Card */
    const TITLECARD = <Translate type='text' content='card.title1' />//Presidential results 201
    const DESC_CARD = <Translate type='text' content='card.description1' />//desc

    return (
      <div>
        <Navbar home='active' about='' data='' contact='' />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Hola</h1>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
