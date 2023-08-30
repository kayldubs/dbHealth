import { CardMedia } from '@mui/material';
import Logo from '../../assests/imgs/DBSoloLogo.svg';
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { withStyles } from '@mui/material';
import  '../Nav/Nav.css'

const styles = {
    customRoot: {
        display: "flex",
        objectFit: "contain"
    },
  };

class Nav extends Component {
  
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        const { classes } = this.props;
        return(
            <nav position="sticky" className='NavItems'>
                <a href="/">
                <CardMedia className='navbar-logo' styles={{ root: classes.customRoot}}
                         component="img"
                         alt="Your logo."
                         image={Logo}
                         //onClick={handlePageChange}
                     >
                     </CardMedia>
                 </a>
                 <h1 className="logo-text">DigiBeat</h1>
                 <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.Cname} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}         
                </ul>
                
            </nav>
        )
    }
}

export default withStyles(styles)(Nav);