import React, { Component, Fragment } from "react";
import StyledForm from "./styles/StyledForm";
import StyledButton from "./styles/StyledButton";
import Link from "./Link";
class Form extends Component {
  state = {
    url:
      "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
    links: [],
  };
  saveToState = (e) => {
    e.preventDefault();
    const link = e.target.value;
    this.setState({
      link,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({
        url: this.state.url,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    const { hashid, url } = result;
    const { links } = this.state;
    if (links.length == 3) links.splice(0, 1); //delete first one if max.lenght = 3;
    links.push({ hashid, url });
    this.setState({
      links,
    });
  };
  render() {
    const { url, links } = this.state;
    return (
      <Fragment>
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={this.saveToState}
          />
          <StyledButton type="submit">Shorten it!</StyledButton>
        </StyledForm>
        {links && Object.keys(links).map((el) => <Link props={links[el]} />)}
      </Fragment>
    );
  }
}
export default Form;
