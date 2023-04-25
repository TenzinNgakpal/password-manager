import React from 'react'
import "./ContactUs.css"

class ContactUs extends React.Component {
    render() {
        return (
            <div className="contacts">
                <h1>Contacts</h1><p />
                <h2>Social Media</h2> <p/>
                <div className="contact-types">
                    <div className="contact-fields"> Email: </div><div className="hidden-fields">pal.tenz@yahoo.com</div><p />
                    <div className="contact-fields"> WhatsApp: </div><div className="hidden-fields">+91 8077718429</div><p />
                    <div className="contact-fields"> Github: </div><div className="hidden-fields"><a href='https://github.com/TenzinNgakpal'>Tenzin Ngakpal</a></div><p/>
                </div>
                <h2>Address</h2>
                <div className="contact-types">
                    <div className="contact-fields"> Country: India</div><p />
                    <div className="contact-fields"> State: Uttarakhand</div><p />
                    <div className="contact-fields"> City: Mussoorie</div><p />
                </div>
            </div>
        );
    }
}
export default ContactUs;