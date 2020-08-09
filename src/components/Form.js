import React, { Component } from "react";
import StyledForm from "./styles/StyledForm";
import StyledButton from "./styles/StyledButton";

class Form extends Component {
  state = {
    link: "",
  };
  saveToState = (e) => {
    e.preventDefault();
    const link = e.target.value;
    this.setState({
      link,
    });
  };
  handleSubmit = () => {
    e.preventDefault();
    fetch(this.state.link).then((data) => console.log(data));
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={this.state.link}
          onChange={this.saveToState}
        />
        <StyledButton type="submit">Shorten it!</StyledButton>
      </StyledForm>
    );
  }
}
export default Form;
