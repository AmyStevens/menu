import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Segment } from 'semantic-ui-react'


const App = () => (
  <Segment basic>
  <Navbar />
  <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route component={NoMatch} />
      </Switch>
    </Segment>

    );

export default App;
