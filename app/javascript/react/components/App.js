import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListsIndexPage from './ListsIndexPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListsIndexPage} />
        <Route exact path="/lists" component={ListsIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
