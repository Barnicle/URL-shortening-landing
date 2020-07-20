import React, { Component } from "react";
import StyledForm from "./styles/StyledForm";
import StyledButton from "./styles/StyledButton";

class Form extends Component {
  render() {
    return (
      <StyledForm>
        <input type="text" placeholder="Shorten a link here..." />
        <StyledButton type="submit">Shorten it!</StyledButton>
      </StyledForm>
    );
  }
}
export default Form;
