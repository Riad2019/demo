
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import { BrowserRouter as Router, Switch,Routes, Route } from 'react-router-dom';
import Business from './components/pages/Business';
import Accounting from './components/pages/Accounting';
import ContactUs from './components/pages/ContactsUs';
import SignUp from './components/pages/SignUp';
import ShortTerm from './components/pages/ShortTerm';
import BusinessSnapshot from './components/pages/BusinessSnapshot';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
       <Routes>
        <Route path='/' exact element={Dashboard} />
        <Route path='/business' element={Business} />
        <Route path='/accounting' element={Accounting} />
        <Route path='/contact-us' element={ContactUs} />
        <Route path='/sign-up' element={SignUp} />
        <Route path='/shortterm' element={ShortTerm} />
        <Route path='/consulting' element={BusinessSnapshot} />
      </Routes>
    </Router>
  );
}

export default App;
