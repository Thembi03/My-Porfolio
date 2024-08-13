import React from "react";

import './footer.css'
import instagramicon from "./img/instagram.png"
import twittericon from "./img/twitter.png"
import githubicon from "./img/github.png"
import linkedinIcon from "./img/linkedin.png"
const Footer =()=>{
    return(
        <footer className="footer">
            <div className="footer-content">
               
                <div className="footer-section social">
                    <h3>Find me Online</h3>
                    <a href="https://www.instagram.com/thembi_lite/" target="_blank" rel="noopener norefferrer">
                        <img src={instagramicon} alt="Instagram"/>
                    </a>
                    <a href="https://x.com/Theembiii" target="_blank" rel="noopener norefferrer">
                        <img src={twittericon} alt="Twitter"/>
                    </a>
                    <a href="https://github.com/Thembi03" target="_blank" rel="noopener norefferrer">
                        <img src={githubicon} alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thembinkosi-sikosana-a11b1b2a6" target="_blank" rel="noopener norefferrer">
                        <img src={linkedinIcon} alt="LinkedIn"/>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>thembinkosisikosana@gmail.com +263773895061</p>
                &copy; 2024 Thembinkosi Sikosana | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer