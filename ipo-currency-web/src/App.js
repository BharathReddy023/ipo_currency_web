// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import MyRoute from "./components/MyRoute";

import IPO_calender from './components/IpoCalender'
import IpoCalender from './components/IpoCalender';
function App(){
  return (
    <Router>
      <Routes>
      
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<MyRoute />}>
          <Route path="/IpoCalender" element={<IpoCalender/>} />
        </Route>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </Router>
  );
};

export default App;
