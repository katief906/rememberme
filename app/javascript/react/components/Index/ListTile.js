import React from "react"

const ListTile = (props) => {
  const list = props.list

  return(
    <li>
        <a>
          {list.name}
        </a>
    </li>
  )
}

export default ListTile