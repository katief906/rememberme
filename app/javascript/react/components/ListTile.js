import React from "react"
import { Link } from "react-router-dom"

const ListTile = (props) => {
  const list = props.list

  return(
    <div>
      <Link to={`/lists/${list.id}`}>
        <i className={`${list.color} ${list.icon} list-label`}></i>
        <h3>{list.name}</h3>
      </Link>
    </div>
  )
}

export default ListTile