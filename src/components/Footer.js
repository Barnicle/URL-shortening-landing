import React, { Component } from "react";
import styled from "styled-components";
import StyledFooter from "./styles/StyledFooter";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
} from "../../public/social-media-icons";

const Footer = () => (
  <StyledFooter>
    <h2>Shortly</h2>
    <div className="footer_links">
      <div>
        <h4>Features</h4>
        <a>Link Shortening</a>
        <a>Branded Links</a>
        <a>Link Shortening</a>
      </div>
      <div>
        <h4>Resources</h4>
        <a>Blog</a>
        <a>Developers</a>
        <a>Support</a>
      </div>
      <div>
        <h4>Company</h4>
        <a>About</a>
        <a>Our Team</a>
        <a>Careers</a>
        <a>Contact</a>
      </div>
    </div>
    <div className="footer_icons">
      <a href={"http://facebook.com"}>
        <FacebookIcon />
      </a>
      <a href={"http://twitter.com"}>
        <TwitterIcon />
      </a>
      <a href={"http://pinterest.com"}>
        <PinterestIcon />
      </a>
      <a href={"http://instagram.com"}>
        <InstagramIcon />
      </a>
    </div>
  </StyledFooter>
);

const StyledIcon = styled.img`
  :hover {
    background: ${(props) => props.theme.cyan};
  }
`;
export default Footer;
