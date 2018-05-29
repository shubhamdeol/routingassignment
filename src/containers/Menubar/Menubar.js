import React, { Component } from 'react';
import styles from './Menubar.css';
import Aux from '../../hoc/Aux/Aux';
import { NavLink } from 'react-router-dom';

class MenuBar extends Component {
    state = {
        menuItems: [{
            menuLabel: "Home",
            src: "/",
            },{
                menuLabel: "Users",
                src: "/users",
            }, {
                menuLabel: "Courses",
                src: "/courses",
            },{
        menuLabel: "all Courses",
        src: "/all-courses",
    }]
}
    render(){

        return (
        <Aux>
       <div className={styles.menuwrap}>
            <ul className={styles.menu}>
                {
                    this.state.menuItems.map( (each , index ) => {
                            return <li key={index}><NavLink
                            exact
                            activeClassName = {styles.active} 
                            to={each.src}>{each.menuLabel}</NavLink></li>
                    })
                }
            </ul>
        </div>
        </Aux>
        )
    }
}

export default MenuBar;
