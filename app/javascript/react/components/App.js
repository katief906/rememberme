import React, { useState } from 'react'
import { ComponentChoice } from './ComponentCollection'

export const App = (props) => {

  const [page, setPage] = useState({
    page: "index",
    id: null
  })

  return (
    <ComponentChoice page={page} setPage={setPage} />
  )
}

export default App
