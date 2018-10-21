import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './ZigzagMenu.css';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

class ZigzagMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { linkActiveness:['active', '', ''] }
    }


    handleLinkClick(clicked) {
        console.log(clicked);
        let linkActiveness  = ['', '', '']
        switch (clicked) {
            case 'application':
                linkActiveness = ['active', '', '']
                this.setState({ linkActiveness });
                this.props.getVizType(clicked)
                break;
            case 'insight':
                linkActiveness = ['', 'active', '']
                this.setState({ linkActiveness });
                this.props.getVizType(clicked)
                break;
            case 'proceeded':
                linkActiveness = ['', '', 'active']
                this.setState({ linkActiveness });
                this.props.getVizType(clicked)
                break;
        }
    }

    render() {
        let linkActiveness=this.state.linkActiveness;
        return (
            <ul className="menuZ " style={{ marginTop: '1vh' }} >
                <li className={linkActiveness[0]} onClick={this.handleLinkClick.bind(this, 'application')}><a href='#'>Applications</a></li>
                <li className={linkActiveness[1]} onClick={this.handleLinkClick.bind(this, 'insight')}><a href='#'>Insights</a></li>
                <li className={linkActiveness[2]} onClick={this.handleLinkClick.bind(this, 'proceeded')}><a href='#'>Proceeded</a></li>
            </ul>
        );
    }
}

export default ZigzagMenu;