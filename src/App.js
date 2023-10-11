/*import React from 'react';
import './App.css';
import Table from './Components/Table';

function App() {
  return (
      <div>
          <Table></Table>
       </div>

  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './Components/Contact';
import ToDoList from './Components/ToDoList'
import Navigation from './Components/Navigation';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/todolist" element={<ToDoList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;