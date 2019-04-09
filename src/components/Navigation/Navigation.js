import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo_nc.png';

const principalColor = '#333333'
const color1 = 'black'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu style={{padding:20}} color={color1  } inverted>
         <Link to="/" >
            <Image src={logo} width={250} alt="My logo" />
        </Link>
        </Menu>
      </div>
    );
  }
}
export default Navigation;
