import React, { useState, useEffect } from 'react'

const IconTile = (props) => {
  props.getIconStatus(props.icon)
  
  const updateIcon = (event) => {
    props.setSelectedIcon(props.icon)
  }

  return(
    <div className={`cell icon ${props.icon.selectedStatus}`} onClick={updateIcon}>
      <i className={props.icon.fontAwesomeCode}></i>
    </div>
  )
}

export default IconTile