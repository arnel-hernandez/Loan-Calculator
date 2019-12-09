import React from 'react';
import './App.css';
import Home from './components/Home'
import History from './components/History'

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/history' component={History} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
