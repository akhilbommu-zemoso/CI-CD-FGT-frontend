import React from 'react';
import MiniDrawer from './components/Drawer'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Callback from './components/Callback';
import Login from './components/Login'
import ErrorPage from './views/ErrorPage'
import { Helmet } from 'react-helmet'
import Profile from './components/Profile'
const TITLE = 'Financial Goal Tracker'
function App() {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Router>
        <Route path="/callback"><Callback /></Route>
        <Route exact path="/"><Login /></Route>
        <PrivateRoute component={MiniDrawer} path="/dashboard" />
        <Route path="/error"><ErrorPage /></Route>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;





