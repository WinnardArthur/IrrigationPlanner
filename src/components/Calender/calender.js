// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './calender.css';
import Calendar from 'react-calendar';


class ReactCalender extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render(){
        return(
            <div className="main-calender">
                 <div className="date">
                     <h3>{this.state.date.toDateString()}</h3>
                 </div>
                 <div class="calenderSection">
                     <Calendar onChange={this.onChange} value={this.state.date} className="react-calendar"/>
                     <div className="calender-links">
                         <Link to="#" className="date-cancel">CANCEL</Link>
                         <Link to="#" className="date-ok">OK</Link>
                     </div>
                 </div>
             </div>
        )
    }
}
export default ReactCalender;
