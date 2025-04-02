import React from 'react';
import '../styles/Contact.css'; // Import CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>HOW CAN WE HELP YOU?</h1>
            <p>Send us your questions, comments, and requests by filling out the form below.</p>
            <p><em>*Asterisk indicates a required field.</em></p>
            <form className="contact-form">
                <label>INQUIRY TYPE</label>
                <select>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                </select>
                
                <label>NAME*</label>
                <input type="text" required />

                <label>EMAIL*</label>
                <input type="email" required />

                <label>TELEPHONE*</label>
                <input type="tel" required />

                <label>MESSAGE*</label>
                <textarea required minLength="50"></textarea>

                <button type="submit">Submit</button>
            </form>

            <div className="contact-info">
                <h2>ROOM RESERVATIONS</h2>
                <p>Toll-Free from U.S and Canada</p>
                <p>+1 888 767 3966</p>

                <h2>CORPORATE OFFICES</h2>
                <p>Hong Kong Office</p>
                <p>info@rosewoodhotelgroup.com</p>
                <p>21/F K11 Atelier. 728 King's Road. Quarry Bay. Hong Kong SAR</p>

                <p>United States Office</p>
                <p>info@rosewoodhotelgroup.com</p>
                <p>9220 W Sunset Blvd, Suite 301, West Hollywood, CA 90069</p>

                <p>Europe Office</p>
                <p>info@rosewoodhotelgroup.com</p>
            </div>
        </div>
    );
};

export default Contact;