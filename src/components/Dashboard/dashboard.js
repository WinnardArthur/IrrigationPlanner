import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './dashboard.css'
import Irrigationsystem from '../IrrigationSystem/irrigationsystem'
import Stats from '../Stats/stats'
import ReactCalender from '../Calender/calender'


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <div className="header">
                    <ul className="list-items">
                        <Link to="/dashboard"><li className="list-item active">Dashboard</li></Link>
                        <Link to="/irrigationplanner"><li className="list-item">Add Crop</li></Link>
                        <Link to="#"><li className="list-item">Documentation</li></Link>
                        <Link><li className="list-item">Help</li></Link>
                    </ul>
                </div>
                <div className="dashboard">
                    <div className="sidebar">
                        <div className="sidebarCard">
                            <div className="imgContainer">
                                <img src={require("../../images/apple.jpg")} alt="apple"/>
                            </div>
                            <div className="cardBody">
                                <h3>Apple Crop</h3>
                                <p>Doula, Cameroon</p>
                                <p>Irrigation type: Sprinkler system</p>
                            </div>
                        </div>
                        <Irrigationsystem/>
                    </div>
                
                    <div className="mainDashboard">
                        <Stats/>
                        <div className="calenderContainer">
                            <ReactCalender/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
