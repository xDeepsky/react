import React, {Component} from 'react';


class MobailMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            showMenu: true
        }
    }
    OpenMenu () {
        this.setState(state => ({
            menuActive: !state.menuActive
        }));
    }
    render() {
        const {items} = this.props;
        return (
            <>
                <div className="menu-button" onClick={() => this.OpenMenu()}>
                    <span>∞ Menu</span>
                </div>
                <nav className={this.state.menuActive ? "main-nav open" : "main-nav"}>
                    <ul className="nav-list">                
                        {items.map((item, i) =>
                            <li key={i}>
                                <a className="nav-list-item" href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul> 
                </nav>
            </>
        )
    }
    
}

export default MobailMenu;