import React, { Component } from 'react';
import './countdown.css'
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.deadline,
      targetDate: undefined,
      itemTitles: [
        ['Day', 'of the day', 'days'],
        ['Hour', 'Hours', 'Hours'],
        ['Minute', 'Minutes', 'Minutes'],
        ['Second', 'Seconds', 'Seconds']
      ],
      timeLeft: []
    };
    this.timeCounter = this.timeCounter.bind(this);
  }
  
  timeCounter () {
    var currentDate = new Date(),
        time = new Date(this.state.date),
        
        diff = Math.round((time - currentDate) / 1000),

        days = Math.floor(diff / (24 * 60 * 60)),
        surplus  = diff - days * (24 * 60 * 60),

        hrs = Math.floor( surplus / (60 * 60)),
        surplus  =  surplus  - hrs * (60 * 60),

        min = Math.floor( surplus / 60),
        sec =  surplus  - min * 60;

        this.setState({
          timeLeft: [
            days,
            hrs,
            min,
            sec
          ]
        });
  }
  
  componentDidMount() {
    this.interval = setInterval(this.timeCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() { 
    const { 
      date,
      targetDate,
      itemTitles,
      timeLeft,
      
    } = this.state;
    
    var itemsTime = [],
        itemsTitle = [];
    for (var i = 0; i < 4; i++) {
      itemsTime.push(
        <div className='countdown__item countdown__item_time'>
          {
            timeLeft[i] < 1 ? 
              '00' : 
              timeLeft[i] < 10 ? 
                '0' + timeLeft[i] : 
                timeLeft[i]
          }
        </div>
      );
      
      var a = 0,
          diff = timeLeft[i] - (Math.floor(timeLeft[i] / 10)) * 10;

          diff == 0 || diff > 4 ? 
            a = 2 :
            1 < diff && diff < 5 ? 
              a = 1 : 
              0;
      
          timeLeft[i] >= 10 && timeLeft[i] < 20 ? a = 2 : 0;

      itemsTitle.push(
        <div className='countdown__item countdown__item_title'> 
          {itemTitles[i][a]}
        </div>
      );
    }
      
    return (
      <div className='countdown-holder'>
        <div className='countdown-row'>{itemsTime}</div>
        <div className='countdown-row'>{itemsTitle}</div>
      </div>
    )
  }
};
export default Countdown;