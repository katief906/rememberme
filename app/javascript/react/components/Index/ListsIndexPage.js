import React, { useEffect} from "react"
import ListTile from "./ListTile"

const ListsIndexPage = (props) => {

  const handleClick = () => {
    props.setPage({
      page: "form",
      id: null
    })
  }

  const listTiles = props.lists.map((list) => {
    return(
      <ListTile
        key={list.id}
        list={list}
        setPage={props.setPage}
      />
    )
  })

  return(
    <div>
      <h1>All Your Lists</h1>
      <ul>
        {listTiles}
      </ul>
      <button className = "button" onClick={handleClick}>
        Add a New List
      </button>
    </div>
  )
}

export default ListsIndexPage