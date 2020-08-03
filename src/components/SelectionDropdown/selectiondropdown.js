import React, { Component } from 'react'
import './selectiondropdown.css'
import ReactCalender from '../Calender/calender'

class Selectdropdown extends Component {
    render() {
        return (
            <div className="dropdowns">
                <div className="dropdown">
                    <label>Select Country</label>
                    <select>
                        <option></option>
                        <option>Cameroon</option>
                        <option>Ghana</option>
                        <option>Uganda</option>
                    </select>
                </div>
                <div className="dropdown">
                    <label>Select City</label>
                    <select>
                        <option></option>
                        <option>Douala</option>
                        <option>Yaounde</option>
                        <option>Bamenda</option>
                        <option>Garoua</option>
                        <option>Maroua</option>
                        <option>Bafoussam</option>
                        <option>Ngaoundere</option>
                        <option>Bertoua</option>
                        <option>Limbe</option>
                        <option>Edea</option>

                        {/* Ghana */}
                        <option>Accra</option>
                        <option>Asamankese</option>
                        <option>Axim</option>
                        <option>Salaga</option>
                        <option>Temale</option>

                    </select>
                </div>
                <div className="dropdown">
                    <label>Select Crop</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div className="dropdown">
                    <label>Select Planting date</label>
                    <select>
                        <option></option>
                        <option className="planting-date">
                            <ReactCalender/>
                        </option>
                    </select>
                    {/* <div>
                        <div className="planting-date">
                            <ReactCalender/>
                        </div>
                    </div> */}
                </div>
                <div className="dropdown">
                    <label>Select soil type</label>
                    <select>
                        <option></option>
                        <option>Sandy</option>
                        <option>Loamy</option>
                        <option>Clayey</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Selectdropdown
