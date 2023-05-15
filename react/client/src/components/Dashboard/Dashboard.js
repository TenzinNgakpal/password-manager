import React, { Component } from 'react';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Dashboard.css';
import PasswordList from '../PasswordManager/PasswordList';
import About from '../Pages/AboutUs';
import Search from "./Search.js";
import Input from '../PasswordManager/Input';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div className = 'Dashboard' >
                    <Navbar />
                    <Search />
                    <div>
                    <Routes>
                    <Route path="/" exact element={<About />}/>
                    <Route path="/home" element= { <About />} />
                    <Route path="/about" element= {<About />} />
                    <Route path="/password-input/*" element= {<Input />} />
                    <Route path="/password-manager" element= {<PasswordList />} />
                    </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dashboard;