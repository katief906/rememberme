import React, {useState, useEffect} from "react"
import ListTile from "./ListTile"

const ListsIndexPage = (props) => {
  const [lists, setLists] = useState([])
  const [readyToMakeListTiles, setReadyToMakeListTiles] = useState(false)

  const fetchLists = async() => {
    try {
      const response = await fetch("/api/v1/lists")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const listData = await response.json()
      setLists(listData)
      setReadyToMakeListTiles(true)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let listTiles

  if (lists.lists) {
    listTiles = lists.lists.map((list) => {
      return(
        <ListTile
          key={list.id}
          list={list}
          setShow={props.setShow}
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
    </div>
  )
}

export default ListsIndexPage