import React, { useState } from 'react'
import ComponentChoice from './ComponentCollection'
import Sidebar from './Sidebar/Sidebar'

export const App = (props) => {

  const [page, setPage] = useState({
    page: "index",
    id: null
  })

  return (
    <>
      <Sidebar />
      <ComponentChoice page={page} setPage={setPage} />
    </>
  )
}

export default App
