
import './App.css';
import Sidebar from './component/sidebar'
import Chat from './component/chat'
import Login from './component/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import { useStateValue } from './component/stateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
  
    <div className="App">
      { !user ? (
        <Login />
      ) : (
        <div class="app_body">
        <Router>
        <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId" >
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
       </Router>
      </div>
      ) }
     
    </div>
  );
}

export default App;
