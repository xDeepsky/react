import React from 'react';
import MobailMenu from '../MobailMenu/MobailMenu';

class Menu extends MobailMenu {
    constructor(props) {
        super(props);
        this.state = { 
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {        
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {        
        this.setState({
            width: window.innerWidth
        });
    }
    render() {
        const {items} = this.props;
        return (
            <>
                <nav className={(this.state.width < 768) ? "main-nav hide" : "main-nav show"}>
                    <ul className="nav-list nav-main">                
                        {items.map((item, i) =>
                            <li key={i}>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul> 
                </nav>
            </>
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Menu;


