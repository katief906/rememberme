import React from "react"

const ListTile = (props) => {
  const list = props.list
  return(
    <li>
      <a href='/lists/1'>
        {list.name}
      </a>
    </li>
  )
}

export default ListTile