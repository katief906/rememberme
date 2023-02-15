import React, { useState, useEffect } from 'react'
import ComponentChoice from './ComponentCollection'
import Sidebar from './Sidebar/Sidebar'

export const App = (props) => {

  const [page, setPage] = useState({
    page: "index",
    id: null
  })

  const [lists, setLists] = useState([])

  const fetchLists = async() => {
    try {
      const response = await fetch("/api/v1/lists")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const listData = await response.json()
      setLists(listData.lists)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchLists()
  }, [])

  return (
    <>
      <Sidebar lists={lists} setPage={setPage}/>
      <ComponentChoice page={page} lists={lists} setPage={setPage} />
    </>
  )
}

export default App
