import React from 'react';
import './index.css';
import Twitter from '../../assets/img/twitter.svg';
import Instagram from '../../assets/img/instagram.svg';
import Telegram from "../../assets/img/telegram.svg";
import Github from "../../assets/img/github.svg";
import Mail from "../../assets/img/email.svg";
import Linkedin from "../../assets/img/linkedin.svg";
import Medium from "../../assets/img/medium.svg";

function Navbar (){
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="text-lg">martha</span>
                <span className="text-lg font-bold">erm</span>
            </div>
            <div className="menu">
                <div className="text-sm lg:flex-grow">
                    <a href="#about" className="menu-item">About me</a>
                    <a href="#projects" className="menu-item">Learning Projects</a>
                    <a href="#talks" className="menu-item">Talks</a>
                </div>
                <div>
                    <a href="https://github.com/marthaerm" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Github} alt="github logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/marthaerm/" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Linkedin} alt="LinkedIn logo"/>
                    </a>
                    <a href="https://twitter.com/marthaerm_" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Twitter} alt="Twitter logo"/>
                    </a>
                    <a href="https://www.instagram.com/marthaerm/" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Instagram} alt="Instagram logo"/>
                    </a>
                    <a href="https://t.me/marthaerm" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Telegram} alt="Telegram logo"/>
                    </a>
                    <a href="mailto:rdz.marthaelena@gmail.com" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Mail} alt="Mail logo"/>
                    </a>
                    <a href="https://marthaerm.medium.com/" target="blank" className="menu-item">
                        <img className=" h-6 w-5 mr-2" src={Medium} alt="Medium logo"/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;