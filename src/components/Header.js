import React, {Component} from 'react';
import StyledHeader from "./styles/StyledHeader";

import DropDown from "./DropDown";
class Header extends Component {
	render() {
		return (
		  <StyledHeader>
			  <h2>Shortly</h2>
			 <DropDown/>
		  </StyledHeader>
		);
	}
}

export default Header;


