import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const StyledPage = styled.div`
  display: grid;
  grid-template-rows: 40px 2fr 1fr;
  height: 100%;
  width: 100%;
`;

class Page extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Meta />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Header />
            <Main />
            <Footer />
          </StyledPage>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default Page;
