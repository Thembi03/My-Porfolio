import React from "react";
import "./contact.css"

const Contact =()=>{
    return(
        <div className="contact">
            <h2> Contact Me</h2>
            <div className="contact-form">
                <form>
                    <label>
                        Name:<input type="text" name="name"  required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email"  required/>
                    </label>
                    <label>
                        Subject:
                        <input type="text" name="subject"  required/>
                    </label>
                    <label>
                        Message:
                        <textarea rows="5" name="message"  required></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <p>Email: <a href="mailto:thembinkosisikosana@gmail.com">thembinkosisikosana@gmail.com</a></p>
                <p>Phone: <a href="tel:+263773895061">+263 773 895 061</a></p>
            </div>
        </div>
    );
};

export default Contact;