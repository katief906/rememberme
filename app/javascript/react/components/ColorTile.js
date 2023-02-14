import React from 'react'

const ColorTile = (props) => {
  props.getColorStatus(props.color)
  const updateColor = (event) => {
    props.setSelectedColor(props.color)
  }

  return(
    <div className={`${props.color.name}-form-color ${props.color.selectedStatus}`} onClick={updateColor}>
    </div>
  )
}

export default ColorTile