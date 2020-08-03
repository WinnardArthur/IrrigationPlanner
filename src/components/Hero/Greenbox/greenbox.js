import React from 'react'
import './greenbox.css'

/**
* @author
* @function Greenbox
**/

const Greenbox = (props) => {
  return(
    <div className="greenbox">
        {props.children}
    </div>
   )

 }

export default Greenbox