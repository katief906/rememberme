import React from "react"
import { Link } from "react-router-dom"

const ListTile = (props) => {
  const list = props.list
  return(
    <li>
      <Link to={`/lists/${list.id}`}>
        {list.name}
      </Link>
    </li>
  )
}

export default ListTile