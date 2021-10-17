import React from 'react';
import './App.css';
import './cssFiles/admin.css';
import './cssFiles/home.css';
import './cssFiles/vacc.css';

import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';

import Home from './pages/Home'
import Admin  from './pages/Admin'
import Vacc from './pages/Vacc';

import AllPatients from './components/AllPatients';

function App() {
  return (
    <React.Fragment>
      
         <Navbar/>
             
             <Route path = "/admin" component = {Admin}/>
             <Route path = "/vacc" component = {Vacc}/>
             <Route path = "/patient" component = {AllPatients}/>
             <Route exact path = "/" component = {Home}/>
      
    </React.Fragment>
  );

  }
export default App;
