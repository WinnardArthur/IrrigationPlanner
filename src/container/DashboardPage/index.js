import React, { Component } from 'react'
import './style.css';
import Dashboard from '../../components/Dashboard/dashboard';
import Hero from '../../components/Hero/hero';
import Greenbox from '../../components/Hero/Greenbox/greenbox';
import Card from '../../components/Card/card';

class DashboardPage extends Component {
    render() {
        return (
            <div className="DashboardPage">
                <div className="addsCaution">
                    <h2>This section is researved for banner adds and remember not to forget this place and also note that users must see</h2>
                </div>
                <div className="dashboard-hero-area">
                    <Hero/>
                    <div>
                        <h1>irrigation advisory</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <Greenbox/>
                <Dashboard/>
                <div className="adds-Container">
                    <img src={require("../../images/download.jpg")} alt="adds"/>
                    <h3>advertisements</h3>
                </div>
                <Greenbox className="greenBox">
                    <h5>Other recommended tools to help you increase agricultural productivity</h5>
                </Greenbox>
                <div className="cards">
                    <Card title="plant doctor"/>
                    <Card title="Agri-Price Watch"/>
                    <Card title="Agri-Price Watch"/>
                </div>
            </div>
        )
    }
}

export default DashboardPage
