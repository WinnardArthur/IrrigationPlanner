import React, { Component } from 'react';
import './style.css'
import Hero from '../../components/Hero/hero';
import Greenbox from '../../components/Hero/Greenbox/greenbox';
import Selection from '../../components/Selection/selection'
import Card from '../../components/Card/card';



class IrrigationPlanner extends Component {
    render(){
        return(
            <div className="IrrigationPlanner">
                <Hero/>
                <Greenbox/>
                <Selection/>
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


export default IrrigationPlanner