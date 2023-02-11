import React from 'react'

const IconTile = (props) => {
  const icon = props.icon
  return(
    <div className="icon">
      <i className={icon.fontAwesomeCode}></i>
    </div>
  )
}

export default IconTile