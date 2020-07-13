import React from 'react';
import styled from 'styled-components'
const StyledNav = styled.nav`
margin: auto 0;
`
const Nav = () => (
	  <StyledNav>
		  <a>Features</a>
		  <a>Pricing</a>
		  <a>Resources</a>
	  </StyledNav>
	);


export default Nav;