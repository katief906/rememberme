import React, { useState, useEffect } from "react"

const ListShowPage = (props) => {
  const [list, setList] = useState({})

  const fetchList = async() => {
    try {
      const listId = props.match.params.id
      const response = await fetch(`/api/v1/lists/${listId}`)
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const listData = await response.json()
      setList(listData)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <h1>{list.name}</h1>
  )

}

export default ListShowPage