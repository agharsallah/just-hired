import React, { Component } from 'react';
import './card.css'
import axios from 'axios' ;
class Card extends Component {
    handleProceed(userId){
        console.log('*----------------------',userId);
         axios.post('http://localhost:1234/api/proceedCand', {
            userId: userId,
            offerID: 'companyX'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }); 

    }
    render() {
        let skills = this.props.skills
        return (
            <div className="" style={{ color: 'black' }}>
                <div className="well profile">
                    <div className="col-sm-12">
                        <div className="col-xs-12 col-sm-8">
                            <h2>{this.props.name}</h2>
                            <p><strong>About: </strong> Web Designer / UI. </p>
                            <p><strong>Challenge Score: </strong> {this.props.score} </p>
                            <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
                            <p><strong>Languages: </strong>
                                {skills.map(function (element, index) {
                                    if (element.level==='alto') {
                                        return <span className="tags" style={{backgroundColor:'#3f681c'}}>{element.skill}</span>
                                    }else if (element.level==='medio'){
                                        return <span className="tags" style={{backgroundColor:'#ffbb00'}}>{element.skill}</span>
                                    }else{
                                        return <span className="tags" style={{backgroundColor:'#fb6542'}}>{element.skill}</span>

                                    }
                                })}
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-4 text-center">
                            <figure>
                                <img src="http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png" alt="" className="img-circle img-responsive" />
                                <figcaption className="ratings">
                                    <p>Ratings
                                <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                        <a href="#">
                                            <span className="fa fa-star-o"></span>
                                        </a>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-xs-12 divider text-center">
                        <div className="col-xs-12 col-sm-4 emphasis">
                            <button className="btn btn-success btn-block"  onClick={this.handleProceed.bind(this,this.props.userId)}><span className="fa fa-plus-circle"></span> Proceed App </button>
                        </div>
                        <div className="col-xs-12 col-sm-4 emphasis">
                            <button className="btn btn-info btn-block"><span className="fa fa-user"></span> View Profile </button>
                        </div>
                        <div className="col-xs-12 col-sm-4 emphasis">
                            <div className="btn-group dropup btn-block">
                                <button type="button" className="btn btn-primary"><span className="fa fa-gear"></span> Options </button>
                                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                    <span className="caret"></span>
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu text-left" role="menu">
                                    <li><a href="#"><span className="fa fa-envelope pull-right"></span> Send an email </a></li>
                                    <li><a href="#"><span className="fa fa-list pull-right"></span> Add or remove from a list  </a></li>
                                    <li className="divider"></li>
                                    <li><a href="#"><span className="fa fa-warning pull-right"></span>Report this user for spam</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#" className="btn disabled" role="button"> Proceed Application </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;