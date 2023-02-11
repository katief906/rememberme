import React from 'react'

const ColorTile = (props) => {

  const color = props.color

  return(
    <div className={`${color}-form-color`}>
    </div>
  )
}

export default ColorTile