import React, { useState } from 'react'
import { Index, Show } from './ComponentCollection'

export const App = (props) => {

  const [index, setIndex] = useState(true)

  return (
    <>
      <Index toggleIndex={index}/>
    </>
  )
}

export default App
