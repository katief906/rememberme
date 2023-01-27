import React from "react"

const ListTile = (props) => {
  const list = props.list
  return(
    <li>{list.name}</li>
  )
}

export default ListTile