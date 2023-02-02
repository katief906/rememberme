import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListsIndexPage from './ListsIndexPage'
import ListTile from './ListTile'
import ListShowPage from './ListShowPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListsIndexPage} />
        <Route exact path="/lists" component={ListsIndexPage} />
        <Route exact path="/lists/:id" component={ListShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
