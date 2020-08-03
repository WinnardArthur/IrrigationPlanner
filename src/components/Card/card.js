import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './card.css' 

class Card extends Component {
    render() {
        return (
            <div className="card" {...this.props}>
                <div className="imgContainer">
                    <img src={require("../../images/images.jpg")} alt="card"/>
                </div>
                <div className="cardBody">
                    <h3>{this.props.title}</h3>
                    <p>This is a wider Card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                    <Link to="#">Learn more</Link>
                </div>
            </div>
        )
    }
}

export default Card
