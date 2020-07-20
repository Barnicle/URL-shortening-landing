import React, { Component } from "react";
import Form from "./Form";
import Link from "./Link";

import StyledMain from "./styles/StyledMain";
import GetStarted from "./GetStarted";
import PreFooter from "./PreFooter";

class Main extends Component {
  render() {
    return (
      <StyledMain>
        <GetStarted />
        {/* <Form /> */}
        {/* <Link /> */}
        <div></div>
        <PreFooter />
      </StyledMain>
    );
  }
}

export default Main;
