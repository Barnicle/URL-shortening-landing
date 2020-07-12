import React, { Component, Fragment } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
class Page extends Component {
  render() {
    return <Fragment>
      <ThemeProvider theme={theme}>
      Page
    </ThemeProvider>
      </Fragment>;
  }
}

export default Page;
