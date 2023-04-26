import React from 'react'
import "./AboutUs.css"

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About</h1><p />
                <div className="about-types" >This is a Password Manager that allows you to manage your passwords. It stores the passwords in encrypted format.</div>
            </div>
        );
    }
}
export default AboutUs;