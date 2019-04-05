import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from '../../Images/nearshorelogo.png';


class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu style={{padding:20}} inverted>
         <Link to="/" >
            <Image src={logo} width={250} alt="My logo" />
        </Link>

        </Menu>
      </div>
    );
  }
}
export default Navigation;
