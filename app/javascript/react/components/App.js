import React, { useState, useEffect } from 'react'
import { Index, Show } from './ComponentCollection'

export const App = (props) => {

  const [index, setIndex] = useState(true)
  const [show, setShow] = useState({
    status: false,
    id: 0
  })

  useEffect(() => {
    if (show.status === true) {
      setIndex(false)
    }
  }, [show.id])

  return (
    <>
      <Index toggleIndex={index} setShow={setShow}/>
      <Show toggleShow={show.status} id={show.id}/>
    </>
  )
}

export default App
