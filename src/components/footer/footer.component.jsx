import React from "react";

import './footer.styles.scss'

const Footer = () => (
    <div className="footer">
        <div className="footer-banner">
            <span className="banner-items">FREE DELIVERY*</span>
            <span className="banner-items">HASSLE-FREE RETURNS</span>
            <span className="banner-items">1-604-679-8975</span>
            <span className="banner-items">INFO@FESTIVALSHRED.COM</span>
        </div>
        <div className="footer-container">
            <ul>
                <h3 className="footer-header">GET INVOLVED</h3>
                <li>Merch</li>
                <li>Promote</li>
                <li>Blog For Us</li>
            </ul>
            <ul>
                <h3 className="footer-header">HELP CENTER</h3>
                <li>Returns</li>
                <li>Track My Order</li>
                <li>Shipping</li>
                <li>FAQ</li>
                <li>Refund Policy</li>
                <li>Terms of Service</li>
            </ul>
            <ul>
                <h3 className="footer-header">NEVER MISS A SALE AGAIN!</h3>
                <li>Enter email</li>
                <li>SIGN UP</li>
            </ul>
            <ul>
                <h3 className="footer-header">WHY FESTIVAL SHRED</h3>
                <li>Festival Shred specializes in unique rave outfits and visionary artist merchandise! We are your virtual portal to that familiar festival feeling and a community of dance floor movement.</li>
            </ul>
        </div>
        <div className="footer-footer">
        </div>
    </div>
)

export default Footer;