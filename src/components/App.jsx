import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'


import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';
import PageLogIn from './PageLogIn';

const store = createStore(rootReducer,{},compose(applyMiddleware(thunk),composeWithDevTools()))

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/">
          <PageLogIn></PageLogIn>
        </Route>
        <Route exact path="/list">
          <PageEmployeesList></PageEmployeesList>
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate></PageEmployeeCreate>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App