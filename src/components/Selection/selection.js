import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './selection.css'
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Selectdropdown from '../SelectionDropdown/selectiondropdown'

class selections extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        }
        this.openMap = this.openMap.bind(this);
        this.closeMap = this.closeMap.bind(this)
    }
    openMap(e){
        this.setState({
            isOpen: true
        })
    }
    closeMap(e){
        this.setState({
            isOpen: false
        })
    }
    render() {
        let map = (
            <div className="mapContainer">
                        <div className="mapHeader">
                            <button className="close-btn" onClick={this.closeMap}>&times;</button>
                        </div>
                        <div className="mapBody">
                            <Map google={this.props.google} zoom={14}>
                                <Marker onClick={this.onMarkerClick} name={'Current location'} />
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    {/* <div>
                                        <h1>{this.state.selectedPlace.name}</h1>
                                    </div> */}
                                </InfoWindow>
                            </Map>
                        </div>
            </div>
        )
        if(!this.state.isOpen){
            map = null;
        }
        return (
            <div className="selections">
                <div className="header">
                    <ul className="list-items">
                        <Link to="/dashboard"><li className="list-item">Dashboard</li></Link>
                        <Link to="/irrigationplanner"><li className="list-item active">Add Crop</li></Link>
                        <li className="list-item">Documentation</li>
                        <li className="list-item">Help</li>
                    </ul>
                </div>
                <div className="mapButton">
                    <button className="btn" onClick={this.openMap}>Open map to select your farm location</button>
                    {map}
                </div>
                <Selectdropdown/>
                <div className="calculateButton">
                    <button>Calculate</button>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBxRoBn6zZn_7NEG2Q-lHjTwYaCKbNLjBU")
})(selections)