import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Don't know what should I write here. I could place simple
                    Lorem Ipsum text but I decided to waste your and my time
                    here. I used React to develop this site. Used Redux to
                    manage the states. Don't know why I'm still writing this
                    thing. Why are you still reading this thing. Please give a
                    look to all the responsive and good looking features I have
                    added in this site. Yes, this site takes time to load data.
                    I know this and beleive me it's not my fault. Actually I'm
                    fetching data from TMDB APIs and they take time to send the
                    response. Please hire me, I'm broken.
                </div>
                <div className="socialIcons">
                    <span
                        className="icon"
                        onClick={() => {
                            window.open(
                                "https://github.com/RockingThor",
                                "_blank"
                            );
                        }}
                    >
                        <FaGithub />
                    </span>
                    <span
                        className="icon"
                        onClick={() => {
                            window.open(
                                "https://twitter.com/oirohit",
                                "_blank"
                            );
                        }}
                    >
                        <FaTwitter />
                    </span>
                    <span
                        className="icon"
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/rohitnandi/",
                                "_blank"
                            );
                        }}
                    >
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
