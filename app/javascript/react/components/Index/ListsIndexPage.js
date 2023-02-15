import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import ListTile from "./ListTile"

const ListsIndexPage = (props) => {

  const [lists, setLists] = useState([])
  const [readyToMakeListTiles, setReadyToMakeListTiles] = useState(false)

  const fetchLists = async() => {
    try {
      const response = await fetch("/api/v1/lists")
      // debugger
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const listData = await response.json()
      setLists(listData.lists)
      setReadyToMakeListTiles(true)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let listTiles 
  let newListButton

  if (lists.lists) {
    newListButton = <Link to="/lists/new">
      <button className = "button">
        Add a New List
      </button>
    </Link>

    listTiles = lists.lists.map((list) => {
      return(
        <ListTile
          key={list.id}
          list={list}
          setPage={props.setPage}
        />
      )
    })
  }

  useEffect(() => {
    fetchLists()
  }, [])

  return(
    <div>
      <h1>All Your Lists</h1>
      <ul>
        {listTiles}
      </ul>
      <div>
        {newListButton}
      </div>
    </div>
  )
}

export default ListsIndexPage