import React, { Component, Fragment } from "react";
import StyledMain from "./styles/StyledMain";
import GetStarted from "./GetStarted";
import PreFooter from "./PreFooter";
import Cards from "./Cards";
class Main extends Component {
  render() {
    return (
      <Fragment>
        <StyledMain>
          <GetStarted />
          <Cards />
          <PreFooter />
        </StyledMain>
      </Fragment>
    );
  }
}

export default Main;
