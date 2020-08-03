import React, { Component } from 'react'
import './stats.css'

class Stats extends Component {
    render() {
        return (
            <div className="stats">
                <div className="box">
                    <div className="title">
                        Irrigation water needs
                    </div>
                    <div className="body">
                        <i class="fa fa-water"></i>
                        <p>100m</p>
                    </div>
                </div>
                <div className="box">
                    <div className="title">
                        Rainfall
                    </div>
                    <div className="body">
                    <i className="fa fa-cloud-rain"></i>
                        <p>100m</p>
                    </div>
                </div>
                <div className="box">
                    <div className="title">
                        Sunshine
                    </div>
                    <div className="body">
                        <i class="fa fa-sun"></i>
                        <p>100m</p>
                    </div>
                </div>
                <div className="box">
                    <div className="title">
                        Temperature
                    </div>
                    <div className="body">
                        <i class="fa fa-temperature-low"></i>
                        <p>100m</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats
