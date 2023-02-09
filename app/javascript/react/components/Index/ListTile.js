import React from "react"

const ListTile = (props) => {
  const list = props.list

  const handleClick = (e) => {
    props.setShow({
      status: true,
      id: e.currentTarget.id
    })
  }

  return(
    <li>
        <a id={list.id} onClick={handleClick}>
          {list.name}
        </a>
    </li>
  )
}

export default ListTile