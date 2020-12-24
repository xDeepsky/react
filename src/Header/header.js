import React from 'react';
import ScrollBtn from '../scroll/scroll';
import MobailMenu from '../MobailMenu/MobailMenu';


const Header = () => {
    const pos = "scroll-container scroll-head";
    const title = 'scroll down to see more';
    const items = [{href:'#', value: 'Home'}, {href:'#', value: 'About me'}, {href:'#', value: 'Portfolio'}, {href:'#', value: 'Contact'}];
    return (
    <header className="App-header">
        <MobailMenu items={items}/>
        <ScrollBtn pos={pos} title={title}/>
    </header>
    )
};

export default Header;
