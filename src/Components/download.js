// Download.js
import React from "react";
import cv from "./documents/Thembinkosi-Taropafadzwa-Sikosana-CV.pdf"
import "./download.css"; // Import the CSS file

const Download = () => {
    
    return (
        <div className="download">
            <h2>Download My CV</h2>
            <p>Click the button below to download my latest CV and learn more about my skills and experiences.</p>
            <a href={cv} download>
                <button>Download CV</button>
            </a>
        </div>
    );
};

export default Download;
