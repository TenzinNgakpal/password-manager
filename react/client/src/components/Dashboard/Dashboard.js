import React, { Component } from 'react';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Dashboard.css';
import Contacts from '../Pages/ContactUs';
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
                    <Route path="/" exact element={<Input />}/>
                    <Route path="/home" element= { <Input />} />
                    <Route path="/about" element= {<About />} />
                    <Route path="/password-manager/*" element= {<Input />} />
                    <Route path="/contact-us" element= {<Contacts />} />
                    </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dashboard;