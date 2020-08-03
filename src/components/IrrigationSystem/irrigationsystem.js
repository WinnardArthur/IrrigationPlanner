import React, { Component } from 'react'
import './irrigationsystem.css'

class Irrigationsystem extends Component {
    render() {
        return (
            <div className="irrigationsystem">
                <div className="title">Select Irrigation System</div>
                <div className="body">
                    <div className="row">
                        <div className="box">
                            64x64
                        </div>
                        <h3>drip irrigation system</h3>
                    </div>
                    <div className="row">
                        <div className="box">
                            64x64
                        </div>
                        <h3>sprinkle irrigation system</h3>
                    </div>
                    <div className="row">
                        <div className="box">
                            64x64
                        </div>
                        <h3>drip irrigation system</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Irrigationsystem
