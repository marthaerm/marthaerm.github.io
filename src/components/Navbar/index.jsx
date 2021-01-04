import React from 'react';
import './index.css';
import Twitter from '../../assets/img/twitter.svg';
import Instagram from '../../assets/img/instagram.svg';
import Telegram from "../../assets/img/telegram.svg";
import Github from "../../assets/img/github.svg";
import Mail from "../../assets/img/email.svg";
import Linkedin from "../../assets/img/linkedin.svg";
function Navbar (){
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="text-lg">martha</span>
                <span className="text-lg font-bold">erm</span>
            </div>
            <div className="menu">
                <div className="text-sm lg:flex-grow">
                    <a className="menu-item">About me</a>
                    <a className="menu-item">Examples</a>
                </div>
                <div>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Github} />
                    </a>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Linkedin} />
                    </a>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Twitter} />
                    </a>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Instagram} />
                    </a>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Telegram} />
                    </a>
                    <a className="menu-item">
                        <img class=" h-6 w-5 mr-2" src={Mail} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;