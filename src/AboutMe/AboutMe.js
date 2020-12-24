import React from 'react';
import ScrollBtn from '../scroll/scroll';
import Menu from '../menu/menu';


const AboutMe = () => {   
    const pos = "scroll-container scroll-about";  
    const title = 'keep scrolling, there is still more to come';
    const items = [{href:'#', value: 'Home'}, {href:'#', value: 'About me'}, {href:'#', value: 'Portfolio'}, {href:'#', value: 'Contact'}];
    return (
        <main className="app-main">
            <div className="menu-container">
                <Menu items={items}/>
            </div>            
            <div className="about">
                <picture>
                    <source media="(min-width: 1200px)" srcSet="images/Jason_Wood_desktop.jpg"/>
                    <source media="(min-width: 768px)" srcSet="images/Jason_Wood_tablet.jpg"/>
                    <img className="mobail-foto" src="images/Jason_Wood_mobail.jpg" alt="foto"/>
                </picture>
                <div className="main-content">
                    <h2 className="main-title">About Me</h2>
                    <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="main-text-tablet">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="author">Jason Wood</p>
                </div>                
            </div>
            <ScrollBtn pos={pos} title={title}/>
        </main>
    )
}

export default AboutMe;