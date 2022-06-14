import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Pathfinder from './pages/pathfinder';

class App extends Component{
  render(){
    return (
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/pathfinder" element={<Pathfinder/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
